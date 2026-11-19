((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
Os(d,e,f,g,h){return new A.a7h(f,g,d,h,e,null)},
a7h:function a7h(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.x=h
_.a=i},
uX:function uX(d){this.a=d},
Et:function Et(d){this.a=d},
bUV(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=J.V(a0),d=x.fF.a(e.h(a0,"period"))
if(d==null)d=C.T3
w=x.f
v=x.N
u=x.z
t=A.aG2(B.di(w.a(e.h(a0,"current")),v,u))
s=A.aG2(B.di(w.a(e.h(a0,"prior_year")),v,u))
r=A.aG2(B.di(w.a(e.h(a0,"prior_period")),v,u))
q=x.T
p=q.a(e.h(a0,"trend"))
if(p==null)p=C.bo
p=J.cW(p,new A.aFL(),x.cZ)
p=B.Q(p,p.$ti.i("ax.E"))
o=q.a(e.h(a0,"machines"))
if(o==null)o=C.bo
o=J.cW(o,new A.aFM(),x.ef)
o=B.Q(o,o.$ti.i("ax.E"))
q=q.a(e.h(a0,"top_products"))
if(q==null)q=C.bo
q=J.cW(q,new A.aFN(),x.j)
q=B.Q(q,q.$ti.i("ax.E"))
n=B.di(w.a(e.h(a0,"customer")),v,u)
m=B.b4(n.h(0,"purchases_count"))
m=m==null?null:C.d.a0(m)
if(m==null)m=0
l=A.pd(n.h(0,"app_gross"))
k=B.b4(n.h(0,"active_customers"))
k=k==null?null:C.d.a0(k)
if(k==null)k=0
n=A.pd(n.h(0,"avg_basket"))
u=B.di(w.a(e.h(a0,"derived")),v,u)
v=A.pd(u.h(0,"gross_margin_pct"))
e=A.pd(u.h(0,"net_margin_pct"))
w=A.pd(u.h(0,"ebitda_margin_pct"))
j=A.pd(u.h(0,"cashflow_operating"))
i=A.bto(u.h(0,"revenue_growth_yoy_pct"))
h=A.bto(u.h(0,"revenue_growth_mom_pct"))
g=A.bto(u.h(0,"result_growth_yoy_pct"))
u=A.bto(u.h(0,"result_growth_mom_pct"))
f=B.b4(J.a_(d,"days"))
f=f==null?null:C.d.a0(f)
if(f==null)f=1
return new A.ok(t,s,r,p,o,q,new A.aAY(m,l,k,n),new A.aC5(v,e,w,j,i,h,g,u),f)},
pd(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fX(J.am(d))
return w==null?0:w},
bto(d){if(d==null)return null
if(typeof d=="number")return d
return B.fX(J.am(d))},
qv:function qv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vx:function vx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
wu:function wu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAY:function aAY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aC5:function aC5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ok:function ok(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aFL:function aFL(){},
aFM:function aFM(){},
aFN:function aFN(){},
aG2(d){var w=J.V(d),v=A.uj(w.h(d,"revenue_net_7")),u=A.uj(w.h(d,"revenue_net_19")),t=A.uj(w.h(d,"revenue_net")),s=A.uj(w.h(d,"expense_net")),r=A.uj(w.h(d,"result_net")),q=A.uj(w.h(d,"vat_collected")),p=A.uj(w.h(d,"vat_paid"))
w=x.T.a(w.h(d,"accounts"))
if(w==null)w=C.bo
w=J.cW(w,new A.aG3(),x._)
w=B.Q(w,w.$ti.i("ax.E"))
return new A.ol(v,u,t,s,r,q,p,w)},
uj(d){var w
if(d==null)return 0
if(typeof d=="number")return d
w=B.fX(J.am(d))
return w==null?0:w},
D1:function D1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ol:function ol(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aG3:function aG3(){},
bUU(d){return new A.yC(d,new B.iy(x.c_),C.dM)},
bua:function bua(){},
bub:function bub(){},
bw3:function bw3(){},
buc:function buc(){},
bu9:function bu9(){},
bu8:function bu8(){},
yC:function yC(d,e,f){this.r=d
this.a=e
this.f=f},
aFK:function aFK(d,e,f){this.a=d
this.b=e
this.c=f},
aFJ:function aFJ(d,e,f){this.a=d
this.b=e
this.c=f},
bUW(){return new A.yD(null)},
amg(d,e,f,g,h){return new A.amf(e,h,g,f,d,null)},
yD:function yD(d){this.a=d},
aG1:function aG1(d){this.a=d},
aFU:function aFU(d,e,f){this.a=d
this.b=e
this.c=f},
aFV:function aFV(d,e,f){this.a=d
this.b=e
this.c=f},
aFW:function aFW(d){this.a=d},
aFT:function aFT(){},
aFX:function aFX(d){this.a=d},
aFY:function aFY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aG0:function aG0(){},
aG_:function aG_(){},
aFZ:function aFZ(){},
aFS:function aFS(d,e){this.a=d
this.b=e},
aFQ:function aFQ(d){this.a=d},
aFR:function aFR(d){this.a=d},
ah_:function ah_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
amf:function amf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
aox:function aox(d,e){this.e=d
this.a=e},
bjl:function bjl(d){this.a=d},
bjm:function bjm(d){this.a=d},
bjn:function bjn(d,e,f){this.a=d
this.b=e
this.c=f},
bjk:function bjk(){},
J3:function J3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ju:function Ju(d,e){this.c=d
this.a=e},
bpj:function bpj(d){this.a=d},
agY:function agY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ic:function Ic(d,e){this.c=d
this.a=e},
bBd(d,e,f,g,h){var w=null
return B.hk(w,w,!0,w,new A.bth(h,g,e,f),d,w,!0,!0,x.H)},
jP(d,e,f,g,h,i,j,k,l,m,n){return new A.amR(g,n,i,e,d,m,f,k,l,j,null)},
avI(d,e){return A.c4x(d,e)},
c4x(d,e){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$avI=B.m(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=d.O(x.q).f
l.aW(D.aAu)
t=4
o=e.aD(0,$.bH(),x.A).ax
o===$&&B.a()
n=x.z
w=7
return B.j(o.jP("finance-balance-sync",B.z(n,n)),$async$avI)
case 7:r=g
q=B.di(x.f.a(r.a),x.N,n)
l.Xp()
if(J.d(J.a_(q,"configured"),!1)){l.aW(D.aAy)
w=1
break}if(J.d(J.a_(q,"ok"),!0)){o=$.bx2()
if(e.e==null)B.U(B.Z(y.b))
e.gcv().cs(o)
l.aW(B.c5(null,null,null,null,null,C.n,null,B.k("Bilanz aus sevDesk \xfcbernommen ("+B.i(J.a_(q,"as_of"))+").",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}else{o=J.a_(q,"error")
l.aW(B.c5(null,null,null,null,null,C.n,null,B.k("Sync-Fehler: "+B.i(o==null?"unbekannt":o),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))}t=2
w=6
break
case 4:t=3
k=s.pop()
p=B.a2(k)
l.Xp()
l.aW(B.c5(null,null,null,null,null,C.n,null,B.k("Sync fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$avI,v)},
avL(d,e,f){var w=0,v=B.q(x.H)
var $async$avL=B.m(function(g,h){if(g===1)return B.n(h,v)
for(;;)switch(w){case 0:w=2
return B.j(B.hk(null,null,!0,null,new A.btf(f,e,e.aD(0,$.bH(),x.A)),d,null,!0,!0,x.H),$async$avL)
case 2:return B.o(null,v)}})
return B.p($async$avL,v)},
a7i:function a7i(d){this.a=d},
aL0:function aL0(){},
aL_:function aL_(){},
aKZ:function aKZ(){},
Iw:function Iw(d,e){this.c=d
this.a=e},
bgv:function bgv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgk:function bgk(){},
bgl:function bgl(){},
bgm:function bgm(){},
bgn:function bgn(){},
bgo:function bgo(){},
bgp:function bgp(){},
bgq:function bgq(){},
bgr:function bgr(){},
bgs:function bgs(d){this.a=d},
bgt:function bgt(d){this.a=d},
bgu:function bgu(d){this.a=d},
bgw:function bgw(d,e){this.a=d
this.b=e},
bgx:function bgx(d,e){this.a=d
this.b=e},
bth:function bth(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btg:function btg(d){this.a=d},
alz:function alz(d){this.a=d},
amR:function amR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bgy:function bgy(d,e){this.a=d
this.b=e},
UZ:function UZ(d,e,f){this.c=d
this.d=e
this.a=f},
Yz:function Yz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
boQ:function boQ(){},
boR:function boR(){},
boS:function boS(d){this.a=d},
Uc:function Uc(d,e,f){this.c=d
this.d=e
this.a=f},
b6w:function b6w(){},
b6y:function b6y(d){this.a=d},
b6z:function b6z(d){this.a=d},
b6x:function b6x(){},
Un:function Un(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b7m:function b7m(){},
b7n:function b7n(){},
b7o:function b7o(){},
b7p:function b7p(d){this.a=d},
ank:function ank(d,e){this.c=d
this.a=e},
bh2:function bh2(){},
bh3:function bh3(){},
ajB:function ajB(d,e){this.c=d
this.a=e},
Cu:function Cu(d,e,f){this.c=d
this.d=e
this.a=f},
ata:function ata(d,e){this.c=d
this.a=e},
bqA:function bqA(){},
bqB:function bqB(){},
wP:function wP(d,e){this.c=d
this.a=e},
ahT:function ahT(d,e){this.e=d
this.a=e},
b52:function b52(){},
b51:function b51(){},
b50:function b50(d,e,f){this.a=d
this.b=e
this.c=f},
b4V:function b4V(d,e){this.a=d
this.b=e},
b4W:function b4W(d,e){this.a=d
this.b=e},
b53:function b53(d){this.a=d},
b54:function b54(d){this.a=d},
b4X:function b4X(){},
b4Y:function b4Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b4Z:function b4Z(d,e){this.a=d
this.b=e},
b5_:function b5_(d,e,f){this.a=d
this.b=e
this.c=f},
btf:function btf(d,e,f){this.a=d
this.b=e
this.c=f},
bte:function bte(d){this.a=d},
Bu:function Bu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TQ:function TQ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=null},
b4P:function b4P(){},
b4Q:function b4Q(d){this.a=d},
b4R:function b4R(d){this.a=d},
b4T:function b4T(d,e){this.a=d
this.b=e},
b4S:function b4S(d,e){this.a=d
this.b=e},
b4U:function b4U(d){this.a=d},
bk:function bk(){},
bEK(d){return new A.L3(d,C.av,C.dB,null,null)},
L3:function L3(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
TR:function TR(d,e,f,g){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.e=_.d=$
_.eP$=f
_.cu$=g
_.c=_.a=null},
b55:function b55(d,e){this.a=d
this.b=e},
b56:function b56(d){this.a=d},
ayj(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4){var w,v,u,t,s,r=null,q=f==null?D.alX:f,p=a0==null?16:a0,o=d==null?D.a0c:d,n=g==null,m=n?A.bxA(r,r,r,r,r,r,r,r):g,l=a3==null?D.XS:a3
n=n?A.bxA(r,r,r,r,r,r,r,r):g
w=j==null?D.Ee:j
v=a1==null?0/0:a1
u=a2==null?0/0:a2
t=h==null?0:h
s=e==null?C.F:e
return new A.o4(q,p,o,m,k,a4,l,0,1,0,u,v,t,D.C2,s,w,i,n)},
ayq(d,e,f,g,h){var w=d==null?D.alY:d,v=e==null?2:e,u=g==null?C.lz:g
return new A.fO(h,f===!0,w,v,u)},
bSa(d,e,f){var w=d.a
w=C.d.aP(w+(e.a-w)*f)
return A.ayq(A.kB(d.c,e.c,f,A.c5m(),x.fj),B.ah(d.d,e.d,f),!1,A.kB(d.e,e.e,f,A.a_P(),x.S),w)},
a1k(d,e,f,g,h,i,j,k,l,m){var w,v,u,t,s,r=null,q=i==null?0:i
if(h==null)w=D.Td
else w=h
v=m==null
u=v?8:m
t=$.lH()
s=t.aYC(f,v?8:m)
t=t.aYD(g,v?8:m)
v=d==null?A.bEH(r,r,r,r,r):d
return new A.iv(q,l,w,j,u,s,e,t,v,k==null?D.alZ:k)},
bSb(d,e,f){var w,v,u,t,s=B.a1(d.c,e.c,f),r=B.ah(d.e,e.e,f),q=B.mQ(d.f,e.f,f),p=A.kB(d.r,e.r,f,A.a_P(),x.S),o=B.bX(d.w,e.w,f),n=B.ah(d.a,e.a,f),m=B.ah(d.b,e.b,f)
m.toString
w=d.x
v=e.x
u=B.ah(w.b,v.b,f)
t=B.ah(w.c,v.c,f)
v=B.a1(w.d,v.d,f)
return A.a1k(A.bEH(v,u,null,!1,t),p,q,o,s,n,null,A.kB(d.y,e.y,f,A.c5n(),x.G),m,r)},
bSc(d,e,f){var w,v,u=B.ah(d.a,e.a,f)
u.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a1(d.c,e.c,f)
v.toString
return new A.mO(u,w,v,B.bX(d.d,e.d,f))},
bEH(d,e,f,g,h){var w,v=e==null?0:e,u=h==null?0:h
if(d==null)w=D.dp
else w=d
return new A.a1h(g===!0,v,u,w,f)},
bxA(d,e,f,g,h,i,j,k){var w,v
if(k==null)w=new A.a1m(4,C.hZ,16,D.xO,0,120,A.c5p(),!1,!1,D.ZS,0,C.N,A.c5o())
else w=k
v=j==null?C.nt:j
return new A.a1l(w,v,d===!0,f!==!1,e!==!1,i,h,g)},
c6a(d,e,f,g){var w=null,v=B.jb(w,w,f.c,w,w,w,w,w,w,w,w,14,w,w,C.S,w,w,!0,w,w,w,w,w,w,w,w)
return new A.Dk(C.d.j(f.b),v)},
c69(d){return A.aAn(D.dp,15)},
o4:function o4(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
ayi:function ayi(d,e){this.a=d
this.b=e},
fO:function fO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ayr:function ayr(){},
ays:function ays(){},
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
mO:function mO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1h:function a1h(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a1l:function a1l(d,e,f,g,h,i,j,k){var _=this
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
a1m:function a1m(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Dk:function Dk(d,e){this.a=d
this.b=e},
L4:function L4(d){this.a=d},
a1n:function a1n(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j
_.b=k},
xL:function xL(d,e){this.a=d
this.b=e},
ahP:function ahP(){},
ahW:function ahW(){},
ahX:function ahX(){},
ahZ:function ahZ(){},
ai_:function ai_(){},
ai0:function ai0(){},
ai1:function ai1(){},
ai2:function ai2(){},
ai3:function ai3(){},
ayt:function ayt(d){this.a=d},
ayu:function ayu(){},
uC:function uC(d,e,f){this.a=d
this.b=e
this.c=f},
ahY:function ahY(){},
ayv:function ayv(){var _=this
_.x=_.w=_.r=_.f=$
_.y=null
_.e=_.d=_.c=_.b=_.a=$},
ayw:function ayw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayx:function ayx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
a6j:function a6j(d){this.b=d},
a1j:function a1j(d,e,f){this.d=d
this.e=e
this.a=f},
abw:function abw(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.i7=e
_.cY=f
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
c6b(d,e){var w=null
return new A.RM(e.w,B.k(e.r,w,w,w,w,w,w,w),w)},
ayb(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=d.c
v=e.c
u=B.ah(w.c,v.c,f)
u.toString
return new A.po(t,e.b,new A.qj(v.a,v.b,u,B.ah(w.d,v.d,f)),!0)},
bG6(d,e,f){var w=A.ayb(d.b,e.b,f),v=A.ayb(d.d,e.d,f),u=A.ayb(d.e,e.e,f)
return new A.uZ(e.a,w,A.ayb(d.c,e.c,f),v,u)},
bUY(d,e,f){var w,v
if(d.k(0,D.fS))return e
if(e.k(0,D.fS))return d
w=B.ah(d.a,e.a,f)
w.toString
v=B.ah(d.b,e.b,f)
v.toString
return new A.eD(w,v)},
bG4(d,e,f){return new A.yF(e.a,!0,B.ah(d.c,e.c,f),e.d,e.e,e.f,B.ah(d.r,e.r,f),e.w,e.x)},
c8D(d){return!0},
c6e(d){return D.a96},
bG5(d,e,f,g){var w
if(d==null)w=f==null?C.E:null
else w=d
return new A.pM(w,f,g,e)},
bI3(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c5i(),x.dv)
v.toString
w=A.kB(d.b,e.b,f,A.c5k(),x.bN)
w.toString
return new A.Qn(v,w)},
bVI(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a1(d.c,e.c,f)
u=B.rt(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.n7(t,w,v,u)},
c_Y(d,e,f){var w,v,u,t=B.ah(d.a,e.a,f)
t.toString
w=B.ah(d.b,e.b,f)
w.toString
v=B.a1(d.c,e.c,f)
u=B.rt(d.d,e.d,f)
if(v==null)v=u==null?C.y:null
return new A.nC(t,w,v,u)},
bVH(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.og(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.bVF(B.bxr(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a1(d.a,e.a,f)
v=B.rt(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_P(),x.S)
if(u==null)u=v==null?C.E:null
return new A.kW(r,e.f,e.r,t,e.x,u,v,w,s)},
c_X(d,e,f){var w,v,u,t,s,r=B.ah(d.e,e.e,f)
r.toString
w=d.w
v=e.w
u=B.og(w.b,v.b,f)
u.toString
t=B.cs(w.c,v.c,f)
t=A.c_V(B.bxr(w.d,v.d,f),v.e,v.f,u,!1,t)
u=B.a1(d.a,e.a,f)
v=B.rt(d.b,e.b,f)
w=B.ah(d.c,e.c,f)
w.toString
s=A.kB(d.d,e.d,f,A.a_P(),x.S)
if(u==null)u=v==null?C.E:null
return new A.ln(r,e.f,e.r,t,e.x,u,v,w,s)},
bVF(d,e,f,g,h,i){return new A.a6u(f,!1,g,i,d,e)},
bVG(d){return C.d.ae(d.e,1)},
c_V(d,e,f,g,h,i){return new A.aeR(f,!1,g,i,d,e)},
c_W(d){return C.d.ae(d.e,1)},
bG0(d,e,f){var w,v=A.kB(d.a,e.a,f,A.c5h(),x.cm)
v.toString
w=A.kB(d.b,e.b,f,A.c5j(),x.es)
w.toString
return new A.N4(v,w,!0)},
bUX(d,e,f){return new A.Nb(d,e==null?4:e,f)},
a1a:function a1a(){},
Di:function Di(d,e){this.a=d
this.b=e},
tC:function tC(d,e){this.r=d
this.w=e},
qj:function qj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ad1:function ad1(){},
po:function po(d,e,f,g){var _=this
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
eD:function eD(d,e){this.a=d
this.b=e},
yF:function yF(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
pM:function pM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aew:function aew(){},
Qn:function Qn(d,e){this.a=d
this.b=e},
n7:function n7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nC:function nC(d,e,f,g){var _=this
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
a6u:function a6u(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
aeR:function aeR(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
N4:function N4(d,e,f){this.a=d
this.b=e
this.c=f},
uY:function uY(){},
Nb:function Nb(d,e,f){this.a=d
this.b=e
this.c=f},
ahK:function ahK(){},
ahO:function ahO(){},
akW:function akW(){},
ale:function ale(){},
alf:function alf(){},
alh:function alh(){},
ali:function ali(){},
am5:function am5(){},
am4:function am4(){},
am6:function am6(){},
apE:function apE(){},
arz:function arz(){},
arA:function arA(){},
ate:function ate(){},
atU:function atU(){},
atT:function atT(){},
atV:function atV(){},
ay7:function ay7(){},
KY:function KY(){},
KZ:function KZ(d,e,f){this.c=d
this.d=e
this.a=f},
ay9:function ay9(d){this.a=d},
ay8:function ay8(d){this.a=d},
RM:function RM(d,e,f){this.c=d
this.e=e
this.a=f},
Yo:function Yo(d){var _=this
_.d=d
_.c=_.a=_.e=null},
bZu(d,e,f){var w=B.aa(f),v=w.i("ae<1,jW>")
v=B.Q(new B.ae(f,new A.b_h(),v),v.i("ax.E"))
w=w.i("ae<1,c>")
w=B.Q(new B.ae(f,new A.b_i(),w),w.i("ax.E"))
return new A.ad2(e,d,v,w,null)},
bS7(d,e,f){var w,v=null,u=B.aJ(x.dO),t=J.a78(4,x.er)
for(w=0;w<4;++w)t[w]=new B.qr(v,C.ab,C.w,new B.jQ(1),v,v,v,v,C.bj,v)
u=new A.a1b(f,d,e,u,t,!0,0,v,v,new B.bs(),B.aJ(x.g))
u.bf()
return u},
ad2:function ad2(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
b_h:function b_h(){},
b_i:function b_i(){},
a1b:function a1b(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.B=d
_.U=e
_.V=f
_.a3=g
_.WL$=h
_.aUl$=i
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
bgE:function bgE(d,e){this.a=d
this.b=e},
aya:function aya(){},
jW:function jW(d,e){this.a=d
this.b=e},
o3:function o3(d,e){this.a=d
this.b=e},
ahL:function ahL(){},
ahM:function ahM(){},
ahN:function ahN(){},
TO:function TO(){},
AZ:function AZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b_j:function b_j(d){this.a=d},
b_k:function b_k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_l:function b_l(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a5D(d,e){var w=d==null?B.cP(C.E,1):d
return new A.a5C(e!==!1,w)},
a1p:function a1p(){},
a5C:function a5C(d,e){this.a=d
this.b=e},
Ni:function Ni(){},
a5E:function a5E(){},
ayG:function ayG(){},
aF_:function aF_(d,e){this.a=d
this.b=e},
ai6:function ai6(){},
alb:function alb(){},
alc:function alc(){},
alj:function alj(){},
L7:function L7(){},
vI:function vI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
hs:function hs(){},
a5I:function a5I(d){this.a=d},
a5J:function a5J(d){this.a=d},
a5K:function a5K(d){this.a=d},
Nd:function Nd(){},
Ne:function Ne(){},
a5N:function a5N(d){this.a=d},
Ng:function Ng(){},
Nh:function Nh(d){this.a=d},
a5H:function a5H(d){this.a=d},
a5G:function a5G(d){this.a=d},
Nc:function Nc(d){this.a=d},
a5L:function a5L(d){this.a=d},
a5M:function a5M(d){this.a=d},
Nf:function Nf(d){this.a=d},
Gh:function Gh(){},
aVt:function aVt(d){this.a=d},
aVu:function aVu(d){this.a=d},
aVv:function aVv(d){this.a=d},
aVw:function aVw(d){this.a=d},
aVx:function aVx(d){this.a=d},
aVy:function aVy(d){this.a=d},
aVz:function aVz(d){this.a=d},
aVA:function aVA(d){this.a=d},
aVB:function aVB(d){this.a=d},
aVC:function aVC(d){this.a=d},
aVD:function aVD(d){this.a=d},
aVE:function aVE(d){this.a=d},
aVF:function aVF(d){this.a=d},
OE:function OE(d,e,f,g,h){var _=this
_.r=d
_.c=e
_.d=f
_.e=g
_.a=h},
Wa:function Wa(d,e,f,g,h){var _=this
_.cx=_.CW=null
_.cy=d
_.db=e
_.dx=f
_.e=_.d=$
_.eP$=g
_.cu$=h
_.c=_.a=null},
bgJ:function bgJ(d,e){this.a=d
this.b=e},
bgH:function bgH(d){this.a=d},
bgI:function bgI(d,e){this.a=d
this.b=e},
bgG:function bgG(){},
bgK:function bgK(d){this.a=d},
byQ(d,e,f,g,h,i,j,k,l,m,n,o,p,a0,a1,a2,a3){var w=p==null?0/0:p,v=n==null?0/0:n,u=a0==null?0/0:a0,t=o==null?0/0:o,s=e==null?0:e,r=f==null?0:f,q=d==null?C.F:d
return new A.pW(l,g,m,a2,k,a3,a1,w,v,s,u,t,r,i,q,j,h,m)},
aLb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1){var w,v,u=null
if(g==null)w=k==null?D.Td:u
else w=g
v=f==null?A.ayh(!1,u,0,u,!1,D.vX):f
w=new A.ee(a1,!0,w,k,e,l,h,!1,r,n,!1,v,d==null?A.ayh(!1,u,0,u,!1,D.vX):d,j,a0,i,s,!1,p)
w.as0(d,e,f,g,h,i,j,k,l,!1,n,!1,p,!1,r,s,!0,a0,a1)
return w},
bW9(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=B.ah(d.x,e.x,f)
m.toString
w=A.bEJ(d.ay,e.ay,f)
v=A.bEJ(d.ch,e.ch,f)
u=B.ah(d.as,e.as,f)
u.toString
t=e.CW
s=A.kB(d.cy,e.cy,f,A.a_P(),x.S)
r=B.a1(d.r,e.r,f)
q=B.rt(d.w,e.w,f)
p=A.kB(d.a,e.a,f,A.c5g(),x.cw)
p.toString
o=B.bIA(d.db,e.db,f)
o.toString
n=B.ah(d.dy.a,e.dy.a,f)
n.toString
return A.aLb(v,m,w,r,e.z,s,new A.yE(t.a,t.b,t.c),q,e.y,!1,e.at,!1,new A.OF(n),!1,u,o,!0,e.cx,p)},
ayh(d,e,f,g,h,i){var w
if(e==null)w=g==null?B.aD(C.d.aP(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
else w=e
return new A.a1i(h,w,g,i,f,!1)},
bEJ(d,e,f){var w=e.d,v=d.d.b,u=w.b,t=B.a1(v.a,u.a,f),s=B.rt(v.b,u.b,f),r=B.ah(v.c,u.c,f)
r.toString
r=A.bG5(t,A.kB(v.d,u.d,f,A.a_P(),x.S),s,r)
s=B.a1(d.b,e.b,f)
u=B.rt(d.c,e.c,f)
v=B.ah(d.e,e.e,f)
v.toString
return A.ayh(!1,s,v,u,e.a,new A.L2(!1,r,w.c,!0))},
bSd(d,e,f){var w=B.a1(d.c,e.c,f),v=B.rt(d.d,e.d,f)
if(w==null)w=v==null?B.aD(C.d.aP(127.5),D.dp.v()>>>16&255,D.dp.v()>>>8&255,D.dp.v()&255):null
return new A.mP(e.a,e.b,w,v)},
c8E(d){return!0},
bAW(d,e,f){var w=f.w
if(w!=null)return A.bBN(w.a,A.byw(w),e/100)
w=f.r
w=w
return w==null?D.dp:w},
c2T(d,e,f){var w,v=f.w
if(v!=null)w=A.bBN(v.a,A.byw(v),e/100)
else{v=f.r
w=v
if(w==null)w=D.dp}return A.aAn(w,40)},
bL6(d,e,f,g,h){var w,v=A.bAW(d,e,f),u=f.w
if(u!=null)w=A.bBN(u.a,A.byw(u),e/100)
else{u=f.r
w=u
if(w==null)w=D.dp}u=A.aAn(w,40)
return new A.Nb(v,h==null?4:h,u)},
c8C(d,e){return!0},
c52(d,e){return Math.abs(d.a-e.a)},
c6h(d,e){var w=J.cW(e,new A.bu_(d),x.bY)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
c6d(d,e){return-1/0},
c6c(d,e){return d.a[e].b},
bMh(d){var w=J.cW(d,new A.btX(),x.fT)
w=B.Q(w,w.$ti.i("ax.E"))
return w},
bMg(d){return A.aAn(D.dp,15)},
pW:function pW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
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
aLc:function aLc(){},
OF:function OF(d){this.a=d},
a1i:function a1i(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
mP:function mP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
L2:function L2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yE:function yE(d,e,f){this.a=d
this.b=e
this.c=f},
aL1:function aL1(d,e){this.a=d
this.b=e},
a5F:function a5F(){},
F7:function F7(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bu_:function bu_(d){this.a=d},
btZ:function btZ(d){this.a=d},
a7w:function a7w(){},
btX:function btX(){},
nd:function nd(){},
qt:function qt(d,e,f,g,h,i){var _=this
_.w=d
_.c=e
_.d=f
_.e=g
_.a=h
_.b=i},
rI:function rI(d,e){this.a=d
this.b=e},
tD:function tD(d,e){this.a=d
this.b=e},
GJ:function GJ(d){this.a=d},
OG:function OG(d){this.a=d},
zr:function zr(d,e){this.a=d
this.b=e},
ahU:function ahU(){},
ahV:function ahV(){},
ai7:function ai7(){},
ald:function ald(){},
alg:function alg(){},
amY:function amY(){},
amZ:function amZ(){},
an_:function an_(){},
an1:function an1(){},
an2:function an2(){},
an3:function an3(){},
an4:function an4(){},
ary:function ary(){},
atd:function atd(){},
aLd:function aLd(d){this.a=d},
aLe:function aLe(){},
aLf:function aLf(){},
zs:function zs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
an0:function an0(){},
aLg:function aLg(){var _=this
_.e=_.d=_.c=_.b=_.a=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=$},
aLj:function aLj(){},
aLh:function aLh(d,e,f){this.a=d
this.b=e
this.c=f},
aLi:function aLi(d,e,f){this.a=d
this.b=e
this.c=f},
aLk:function aLk(){},
vt:function vt(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},
a7v:function a7v(d,e,f){this.d=d
this.e=e
this.a=f},
abJ:function abJ(d,e,f,g,h,i,j,k){var _=this
_.aB=d
_.i7=e
_.cY=f
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
bxz(d,e){var w,v,u,t,s,r,q,p,o=d.ch,n=B.bJ(o.length,0,!1,x.i),m=B.aa(o),l=new B.ae(o,new A.ayk(),m.i("ae<1,F>")).kx(0,new A.ayl()),k=e-l,j=new A.ayo(k,d,n)
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
new B.j1(o,m.i("j1<1>")).aC(0,new A.aym(q,k/(p-1),n))
break
case 4:q={}
p=o.length
q.a=0
new B.j1(o,m.i("j1<1>")).aC(0,new A.ayn(q,k/(p*2),n))
break
case 3:j.$0()
break}return n},
ayk:function ayk(){},
ayl:function ayl(){},
ayo:function ayo(d,e,f){this.a=d
this.b=e
this.c=f},
ayp:function ayp(d,e,f){this.a=d
this.b=e
this.c=f},
aym:function aym(d,e,f){this.a=d
this.b=e
this.c=f},
ayn:function ayn(d,e,f){this.a=d
this.b=e
this.c=f},
byw(d){var w,v={}
v.a=B.b([],x.n)
w=d.b
if(w==null||w.length!==d.a.length){w=d.a
if(w.length>1)new B.j1(w,B.aa(w).i("j1<1>")).aC(0,new A.aIj(v,d))
else throw B.e(B.bG('"colors" must have length > 1.',null))}else v.a=w
return v.a},
aIj:function aIj(d,e){this.a=d
this.b=e},
aBw(d,e){var w,v
if(e!=null){w=B.aa(e).i("ae<1,F>")
v=B.Q(new B.ae(e,new A.aBx(),w),w.i("ax.E"))
return A.c65(d,new A.a1Z(v,x.C))}else return d},
aBx:function aBx(){},
c_4(d,e){var w=!0
if(d!==C.fd)if(!(d===C.ab&&e===C.w))w=d===C.iE&&e===C.b0
if(w)return D.Es
else{w=!0
if(d!==C.iD)if(!(d===C.iE&&e===C.w))w=d===C.ab&&e===C.b0
if(w)return D.Et
else return D.a9N}},
NI:function NI(d,e){this.a=d
this.b=e},
a1O:function a1O(d,e){this.a=d
this.b=e},
zx:function zx(d,e){this.a=d
this.$ti=e},
anb:function anb(){},
c65(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=$.ao(),i=x.v,h=B.b([],i),g=new B.cl(j.r,C.af,k,k,h)
for(j=B.MZ(d),w=B.b([],x.I),v=new B.N0(j,!1,w),u=e.a,t=j.a,s=x.dc;v.t();){r=v.c
if(r===0||v.f)B.U(B.fC('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new B.N_(v,r)
v.Dw()
p=w[r].b
p===$&&B.a()
p.a.length()
o=0
n=!0
for(;;){v.Dw()
p=w[r].b
p===$&&B.a()
if(!(o<p.a.length()))break
p=e.b
if(p>=u.length)p=e.b=0
e.b=p+1
m=u[p]
if(n){p=j.b
l=B.eq(B.b([],i),!0,s)
p=new B.Ko(new B.cl(t,p,k,new B.aq0([q,o,o+m,!0]),l),C.t,k)
h.push(p)
l=g.f
if(l!=null)p.iH(l)
p=g.e
if(p!=null)p.a.delete()
g.e=null}o+=m
n=!n}}return g},
a1Z:function a1Z(d,e){this.a=d
this.b=0
this.$ti=e},
b2N:function b2N(){},
bym(d){var w,v,u,t=x.U,s=B.b([B.b([],t)],x.aA)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.G)(d),++v){u=d[v]
if(!u.k(0,D.fS))C.b.gaf(s).push(u)
else if(C.b.gaf(s).length!==0)s.push(B.b([],t))}if(C.b.gaf(s).length===0)s.pop()
return s},
bSg(d){var w,v=d.d
if(v.b===0&&d.a.b===0&&d.b.b===0&&d.c.b===0)return!1
v=v.a
w=!1
if(v.gem(v)===0){v=d.a.a
if(v.gem(v)===0){v=d.b.a
if(v.gem(v)===0){v=d.c.a
v=v.gem(v)===0}else v=w}else v=w}else v=w
if(v)return!1
return!0},
aAn(d,e){var w=1-e/100
return B.aD(d.gfL(d),C.d.aP(d.gOe()*w),C.d.aP(d.gGu()*w),C.d.aP(d.gKR()*w))},
bG3(d){var w=d.a,v=w?d.b.d.b:0,u=w?d.b.a.b:0,t=w?d.b.b.b:0
return new B.al(v,u,t,w?d.b.c.b:0)},
byn(d){var w=d.a,v=w?A.b_g(d.b):0,u=w?A.b_g(d.c):0,t=w?A.b_g(d.d):0
return new B.al(v,u,t,w?A.b_g(d.e):0)},
bXn(d){var w
if(d.c===0){d.sf0(null)
w=B.c0(d.r)
d.r=B.aD(0,w.v()>>>16&255,w.v()>>>8&255,w.v()&255).gq(0)}},
bza(d,e,f,g){var w
if(f!=null){d.r=C.E.gq(0)
d.sf0(f.nQ(0,g))}else{w=e==null?C.F:e
d.r=w.gq(w)
d.sf0(null)}},
b_g(d){var w=d.c
return w.a&&w.c!==0?0+w.c:0},
kB(d,e,f,g,h){var w,v,u,t=d!=null
if(t&&e!=null&&d.length===e.length){w=d.length
v=J.l1(w,h)
for(u=0;u<w;++u)v[u]=g.$3(d[u],e[u],f)
return v}else if(t&&e!=null){w=e.length
v=J.l1(w,h)
for(u=0;u<w;++u){t=u>=d.length?e[u]:d[u]
v[u]=g.$3(t,e[u],f)}return v}else return e},
c7p(d,e,f){return C.d.aP(d+(e-d)*f)},
bBN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=d.length
if(e.length!==m){w=J.l1(m,x.i)
for(v=0;v<m;v=u){u=v+1
w[v]=u/m}e=w}for(t=e.length-1,s=0;s<t;s=q){r=e[s]
q=s+1
p=e[q]
o=d[s]
n=d[q]
if(f<=r)return o
else if(f<p){t=B.a1(o,n,(f-r)/(p-r))
t.toString
return t}}return C.b.gaf(d)}},D,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[6]
E=c[5]
F=c[7]
A.a7h.prototype={
u(d){var w,v,u,t=this,s=null,r=t.r,q=r?C.bm:C.A
r=r?C.m:C.am
w=x.p
v=B.b([],w)
C.b.K(v,B.b([B.co(t.x,C.m,s,18),C.aZ],w))
v.push(B.az(new B.e8(t.c,!1,s),1))
v=B.ap(v,C.D,s,C.f,C.h,0,s,s)
u=t.w
w=B.b([v,C.M,B.k(t.d,1,C.ak,s,B.c8(u==null?C.j:u,22,C.S),s,s,s)],w)
return B.by(r,B.ad(w,C.D,s,C.iq,C.h,0),q,s,C.ai,s,3)}}
A.uX.prototype={
M9(d){return this.aUk(d)},
aUk(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$M9=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.ev("finance_summary",B.a4(["p_from",E.rp(d.a),"p_to",E.rp(d.b)],s,r),r),$async$M9)
case 3:q=f
if(q==null){u=D.aq6
w=1
break}if(x.f.b(q)){u=B.di(q,s,r)
w=1
break}u=D.ask
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M9,v)},
M8(d){return this.aUj(d)},
aUj(d){var w=0,v=B.q(x.c),u,t=this,s,r,q
var $async$M8=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:s=x.N
r=x.z
w=3
return B.j(t.a.ev("finance_kpis",B.a4(["p_from",E.rp(d.a),"p_to",E.rp(d.b)],s,r),r),$async$M8)
case 3:q=f
if(x.f.b(q)){u=B.di(q,s,r)
w=1
break}u=D.apO
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M8,v)},
pO(d){return this.arJ(d)},
arJ(d){var w=0,v=B.q(x.S),u,t=this,s,r,q
var $async$pO=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.jP("sevdesk-sync",B.a4(["from",E.rp(d.a),"to",E.rp(d.b)],s,s)),$async$pO)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a_(r,"upserted")=="number"){u=C.d.a0(B.fL(J.a_(r,"upserted")))
w=1
break}u=0
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$pO,v)},
M4(d){return this.aUa(d)},
aUa(d){var w=0,v=B.q(x.N),u,t=this,s,r,q
var $async$M4=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:q=t.a.ax
q===$&&B.a()
s=x.N
w=3
return B.j(q.jP("finance-export-pdf",B.a4(["from",E.rp(d.a),"to",E.rp(d.b)],s,s)),$async$M4)
case 3:r=f.a
if(x.f.b(r)&&typeof J.a_(r,"base64")=="string"){u=B.aI(J.a_(r,"base64"))
w=1
break}throw B.e(B.e7("PDF-Export fehlgeschlagen"))
case 1:return B.o(u,v)}})
return B.p($async$M4,v)}}
A.Et.prototype={
Gn(d){return this.akU(d)},
akU(d){var w=0,v=B.q(x.d),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gn=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.M9(d),$async$Gn)
case 7:q=f
o=A.aG2(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.I5(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gn,v)},
Gi(d){return this.akF(d)},
akF(d){var w=0,v=B.q(x.X),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Gi=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.M8(d),$async$Gi)
case 7:q=f
o=A.bUV(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.I5(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Gi,v)},
pO(d){return this.arK(d)},
arK(d){var w=0,v=B.q(x.S),u,t=2,s=[],r=this,q,p,o,n
var $async$pO=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.pO(d),$async$pO)
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
p=r.I5(q)
throw B.e(p)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$pO,v)},
M3(d){return this.aU9(d)},
aU9(d){var w=0,v=B.q(x.gc),u,t=2,s=[],r=this,q,p,o,n,m
var $async$M3=B.m(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.j(r.a.M4(d),$async$M3)
case 7:q=f
o=C.hM.cD(q)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.a2(m)
o=r.I5(p)
throw B.e(o)
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$M3,v)},
I5(d){if(d instanceof B.yz)return d
if(d instanceof B.la){if(d.b==="42501")return new B.vM(d.a)
return new B.tk(d.a)}if(d instanceof B.Nw)return new B.tk("Edge Function fehlgeschlagen ("+d.a+")")
return new B.Bn("Unerwarteter Fehler: "+B.i(d))},
$iaFP:1}
A.qv.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.vx.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f]}}
A.wu.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aAY.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aC5.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w]}}
A.ok.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.D1.prototype={
gbE(){var w=this
return[w.a,w.d,w.e,w.f]}}
A.ol.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.yC.prototype={
Hl(d){return this.arI(0)},
arI(d){var w=0,v=B.q(x.h6),u,t=this,s,r,q,p
var $async$Hl=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:p={}
t.se9(0,C.dw)
s=t.r
r=s.aD(0,$.xv(),x.P)
p.a=null
w=3
return B.j(B.pn(new A.aFK(p,t,r),x.H),$async$Hl)
case 3:t.se9(0,f)
q=t.f
if(q.ght(q)==null){q=$.bx3()
s=s.e
s===$&&B.a()
s.cs(q)}u=p.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$Hl,v)},
M2(){return this.aU8()},
aU8(){var w=0,v=B.q(x.aD),u,t=this,s,r,q
var $async$M2=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:q={}
t.se9(0,C.dw)
s=t.r.aD(0,$.xv(),x.P)
q.a=null
w=3
return B.j(B.pn(new A.aFJ(q,t,s),x.H),$async$M2)
case 3:t.se9(0,e)
r=t.f
u=r.ght(r)!=null?null:q.a
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$M2,v)}}
A.yD.prototype={
dg(d,e){var w=null,v=e.an($.xv(),x.P),u=e.an($.bx3(),x.aN)
return B.ig(B.dG(B.b([new B.fk("Finanzen","Dashboard",new A.ah_(e.an($.bx1(),x.b).gj2(),new A.aFU(this,d,e),new A.aFV(this,d,e),new A.aFW(d),new A.aFX(d),new A.aFY(this,d,e,v),w),w),C.aQ,new A.aox(v,w),C.bJ,D.afG,C.bJ,B.dz(u,new A.aFZ(),new A.aG_(),new A.aG0(),!1,!0,!1,x.d,x.l)],x.p),C.cj,w,C.K,!1),C.m,new A.aG1(e))},
JX(d,e){return this.aMI(d,e)},
aMI(d,e){var w=0,v=B.q(x.H),u,t,s,r
var $async$JX=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:s=$.bx1()
w=3
return B.j(e.aD(0,s.ghC(),x.F).Hl(0),$async$JX)
case 3:r=g
if(d.e==null){w=1
break}s=e.aD(0,s,x.b)
s=s.ght(s)
t=d.O(x.q).f
t.aW(B.c5(null,null,null,null,null,C.n,null,B.k(s==null?"sevDesk synchronisiert: "+B.i(r)+" Buchungen.":"Synchronisierung fehlgeschlagen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
case 1:return B.o(u,v)}})
return B.p($async$JX,v)},
BJ(d,e){return this.axV(d,e)},
axV(d,e){var w=0,v=B.q(x.H),u,t,s
var $async$BJ=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:w=3
return B.j(e.aD(0,$.bx1().ghC(),x.F).M2(),$async$BJ)
case 3:s=g
if(d.e==null){w=1
break}if(s==null){d.O(x.q).f.aW(D.aAA)
w=1
break}t=B.qc(C.t,10)
w=4
return B.j($.bOs().ua(s,"finanzauswertung.pdf",t,null,null,null),$async$BJ)
case 4:case 1:return B.o(u,v)}})
return B.p($async$BJ,v)},
BK(d,e,f){return this.aKh(d,e,f)},
aKh(d,e,f){var w=0,v=B.q(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$BK=B.m(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:w=3
return B.j(B.hk(null,null,!0,null,new A.aFS(f,d),d,null,!0,!0,x.cJ),$async$BK)
case 3:if(h!==!0){w=1
break}t=5
r=new E.mM(e.aD(0,$.bH(),x.A))
p=f.a
o=f.b
n=$.dp()
m=n.am(p)
n=n.am(o)
w=8
return B.j(r.wk("finance_period",p,o,B.a4(["period_from",p.dS()],x.N,x.z),"Finanzauswertung "+m+" \u2013 "+n),$async$BK)
case 8:if(d.e!=null)d.O(x.q).f.aW(F.mi)
t=2
w=7
break
case 5:t=4
k=s.pop()
q=B.a2(k)
if(d.e!=null)d.O(x.q).f.aW(B.c5(null,null,null,null,null,C.n,null,B.k("Fehler: "+B.i(q),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=7
break
case 4:w=2
break
case 7:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$BK,v)}}
A.ah_.prototype={
u(d){var w=this,v=null,u=A.amg(C.m,C.fw,C.m,w.w,"Freigabe f\xfcr Auswertung anfordern"),t=A.amg(v,C.F5,v,w.r,"Gesellschafter-Freigaben"),s=w.c,r=A.amg(v,D.y6,v,s?v:w.d,"sevDesk synchronisieren"),q=A.amg(C.an,C.i6,C.an,s?v:w.e,"PDF-Export")
return B.ap(B.b([u,C.aZ,t,C.aZ,r,C.aZ,q,C.aZ,A.amg(C.aE,C.fv,C.aE,s?v:w.f,"DATEV-Export (Buchungsstapel)")],x.p),C.k,v,C.f,C.H,0,v,v)}}
A.amf.prototype={
u(d){var w,v=this,u=null,t=B.aR(12),s=B.aR(12),r=B.aR(12),q=v.w
if(q==null)q=C.am
q=B.cP(q,1)
w=v.r
if(w==null)w=C.j
return B.Hk(B.dL(!1,C.a_,!0,t,B.eF(!1,s,!0,B.b9(u,B.co(v.c,w,u,20),C.r,u,u,new B.b5(u,u,q,r,u,u,C.G),u,40,u,u,u,u,u,40),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),C.r,C.ae,0,u,u,u,u,u,C.br),u,v.d,u,u)}}
A.aox.prototype={
dg(d,e){var w=null,v=this.e,u=$.dp(),t=x.p
return B.by(w,B.ad(B.b([D.a8T,C.M,B.ap(B.b([D.ac1,C.aV,B.az(B.k(u.am(v.a)+" \u2013 "+u.am(v.b),w,w,w,B.D(C.j,16,C.S),w,w,w),1)],t),C.k,w,C.f,C.h,0,w,w),C.u,B.lo(C.cx,B.b([new A.J3("Monat",new A.bjl(e),w,w),new A.J3("Jahr (YTD)",new A.bjm(e),w,w),new A.J3("Zeitraum w\xe4hlen \u2026",new A.bjn(this,d,e),D.aaD,w)],t),C.dI,6,8)],t),C.D,w,C.f,C.h,0),w,w,C.C,w,3)},
Ji(d,e){return this.aJb(d,e)},
aJb(d,e){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$Ji=B.m(function(f,g){if(f===1)return B.n(g,v)
for(;;)switch(w){case 0:t=new B.b_(Date.now(),0,!1)
s=u.e
w=2
return B.j(E.aw1(new A.bjk(),d,B.bB(B.aW(t)-5,1,1,0,0,0,0),new B.lP(s.a,s.b,x.bz),B.bB(B.aW(t)+1,1,1,0,0,0,0),C.eq),$async$Ji)
case 2:r=g
if(r!=null)e.aD(0,$.xv().ghC(),x.V).us(0,new E.lV(r.a,r.b))
return B.o(null,v)}})
return B.p($async$Ji,v)}}
A.J3.prototype={
u(d){var w=null,v=B.aR(9999),u=B.aR(9999),t=B.aR(9999),s=B.cP(C.am,1),r=x.p,q=B.b([],r),p=this.e
if(p!=null)C.b.K(q,B.b([B.co(p,C.j,w,14),C.aZ],r))
q.push(B.k(this.c,w,w,w,B.D(C.j,13,C.S),w,w,w))
return B.dL(!1,C.a_,!0,v,B.eF(!1,u,!0,B.b9(w,B.ap(q,C.k,w,C.f,C.H,0,w,w),C.r,w,w,new B.b5(w,w,s,t,w,w,C.G),w,w,w,w,C.l1,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,this.d,w,w,w,w,w,w,w),C.r,C.ae,0,w,w,w,w,w,C.br)}}
A.Ju.prototype={
u(d){var w,v,u,t,s=null,r=x.p,q=B.b([B.ia(new A.bpj(this)),C.bJ,D.a8X,C.u],r),p=this.c.w
if(p.length===0)q.push(B.by(s,B.ap(B.b([D.ad0,C.aF,B.az(B.k("Keine Buchungen im gew\xe4hlten Zeitraum.",s,s,s,B.D(C.p,14,C.l),s,s,s),1)],r),C.k,s,C.f,C.h,0,s,s),C.ae,s,C.C,s,3))
else{w=B.b([],r)
for(v=p.length,u=0;u<p.length;p.length===v||(0,B.G)(p),++u){t=p[u]
C.b.K(w,B.b([new A.agY(t.a,t.b,t.c==="revenue",t.d,s),C.M],r))}q.push(B.ad(w,C.k,s,C.f,C.h,0))}return B.ad(q,C.a8,s,C.f,C.h,0)}}
A.agY.prototype={
u(d){var w=this,v=null,u=w.e,t=u?C.bm:C.ae,s=B.cP(u?C.m:C.am,1),r=B.aR(4),q=w.c
r=B.b9(C.W,B.k(C.c.a_(q,0,1),v,v,v,B.c8(C.j,14,C.q),v,v,v),C.r,v,v,new B.b5(t,v,s,r,v,v,C.G),v,36,v,v,v,v,v,36)
q=B.k(q+" \xb7 "+w.d,1,C.ak,v,B.D(C.j,14,C.S),v,v,v)
t=u?"Erl\xf6s":"Aufwand"
s=x.p
t=B.az(B.ad(B.b([q,B.k(t,v,v,v,B.D(C.p,12,C.l),v,v,v)],s),C.D,v,C.f,C.h,0),1)
q=$.d3().am(w.f)
return B.by(v,B.ap(B.b([r,C.aF,t,B.k(q,v,v,v,B.D(u?C.aE:C.j,15,C.S),v,v,v)],s),C.k,v,C.f,C.h,0,v,v),v,v,C.eO,v,3)}}
A.Ic.prototype={
u(d){var w=null
return B.by(C.an,B.ap(B.b([D.adG,C.aF,B.az(B.k(this.c,w,w,w,B.D(C.j,14,C.l),w,w,w),1)],x.p),C.k,w,C.f,C.h,0,w,w),C.eJ,w,C.C,w,3)}}
A.a7i.prototype={
dg(d,e){return B.dz(e.an($.bQY(),x.e),new A.aKZ(),new A.aL_(),new A.aL0(),!1,!0,!1,x.X,x.l)}}
A.Iw.prototype={
u(d){var w,v=this,u=null,t=v.c,s=t.x,r=s>0,q=r?t.a.c/s:0,p=r?t.r.a/s:0
s=t.r
r=s.c
w=r>0?s.b/r:0
s=x.p
r=B.b([D.ay6,C.u,B.ia(new A.bgv(v,q,100-t.w.a,w,p)),C.u,new A.alz(u),C.aQ,D.ay5,C.u,new A.ahT(t,u),C.aQ,D.ay_,C.u,B.bC(u,!0,u,B.n6(u,B.by(u,new A.Uc(t,220,u),u,u,C.C,u,3),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgw(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Cashflow-Entwicklung \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.axT,C.u,B.bC(u,!0,u,B.n6(u,new A.Un(t,200,!1,u),C.a4,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.bgx(v,d),u,u,u,u,u,u),!1,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Aktueller vs. Vergleichszeitraum \u2014 Diagramm vergr\xf6\xdfern",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,C.P,u),C.aQ,D.axY,C.u,new A.ank(t,u),C.aQ,D.axU,C.u,new A.ajB(t,u)],s)
if(t.f.length!==0)C.b.K(r,B.b([C.aQ,D.ay1,C.u,new A.ata(t,u)],s))
return B.ad(r,C.a8,u,C.f,C.h,0)}}
A.alz.prototype={
u(d){var w=null
return B.k("* EBITDA wird f\xfcr Etappe 1 vereinfacht mit dem Betriebsergebnis gleichgesetzt (ohne saubere Trennung von AfA, Zinsen und Steuern). Sobald der sevDesk-Bilanz-Sync aktiv ist, kommen Liquidit\xe4t 1/2/3, EK-Quote, ROI und die echte EBITDA-Berechnung dazu.",w,w,w,B.D(C.p,11,C.l).ep(1.35),w,w,w)}}
A.amR.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.x)w=C.c.cF(m.d,"-")?C.an:C.aE
else w=C.j
v=m.w
u=v.length>=2
t=u?"Diagramm vergr\xf6\xdfern":l
s=u?new A.bgy(m,d):l
r=x.p
q=B.b([B.az(B.k(m.c.toUpperCase(),l,l,l,B.D(C.p,10,C.q).fZ(0.6),l,l,l),1)],r)
p=m.Q
if(p!=null){o=B.cP(C.hS,0.8)
n=B.aR(4)
q.push(B.b9(l,B.k("Ziel "+p,l,l,l,B.D(C.an,9,C.q),l,l,l),C.r,l,l,new B.b5(l,l,o,n,l,l,C.G),l,l,l,l,C.nu,l,l,l))}q=B.b([B.ap(q,C.k,l,C.f,C.h,0,l,l),C.b3,B.byl(C.dK,B.k(m.d,l,l,l,B.c8(w,22,C.q),l,l,l),C.mN)],r)
p=m.e
if(p!=null)q.push(B.k(p,2,C.ak,l,B.D(C.p,10,C.aI),l,l,l))
q.push(C.d6)
q.push(B.ap(B.b([new A.UZ("Vormonat",m.r,l),C.cE,new A.UZ("Vorjahr",m.f,l)],r),C.k,l,C.f,C.h,0,l,l))
q.push(C.d6)
q.push(B.az(new A.Yz(v,m.y,m.z,l),1))
return B.bC(l,u,l,B.n6(l,B.by(l,B.ad(q,C.D,l,C.f,C.h,0),l,l,C.dC,l,3),C.a4,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,s,l,l,l,l,l,l),!1,l,l,!1,l,!1,l,l,l,t,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,C.P,l)}}
A.UZ.prototype={
u(d){var w,v,u,t,s,r=null,q=this.d
if(q==null){q=B.aR(4)
return B.b9(r,B.k(this.c+" \u2014",r,r,r,B.D(C.p,9,C.q),r,r,r),C.r,r,r,new B.b5(C.am,r,r,q,r,r,C.G),r,r,r,r,C.nu,r,r,r)}w=q>=0
v=w?C.aE:C.an
u=v.f_(0.12)
t=B.cP(v,0.7)
s=B.aR(4)
return B.b9(r,B.ap(B.b([B.co(w?F.a9T:D.a9S,v,r,10),F.aAa,B.k(this.c+" "+C.d.ae(q,1)+" %",r,r,r,B.D(v,9,C.q),r,r,r)],x.p),C.k,r,C.f,C.H,0,r,r),C.r,r,r,new B.b5(u,r,t,s,r,r,C.G),r,r,r,r,C.nu,r,r,r)}}
A.Yz.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c
if(j.length<2)return C.ap
w=B.b([],x.U)
for(v=0;v<j.length;++v)w.push(new A.eD(v,j[v]))
u=C.b.kx(j,new A.boQ())
t=C.b.kx(j,new A.boR())
s=this.d
r=s!=null
if(r){if(s<u)u=s
if(s>t)t=s}q=this.e
p=q!=null
if(p){if(q<u)u=q
if(q>t)t=q}o=Math.abs(t-u)<0.001
j=new A.boS(j.length-1)
n=o?u-1:u
m=o?t+1:t
l=A.a5D(k,!1)
w=B.b([A.aLb(k,2,A.ayh(!1,C.m.f_(0.16),0,k,!0,D.vX),C.m,0.35,k,D.Ei,k,!0,!1,!0,!1,D.FM,!1,10,D.YB,!0,C.lz,w)],x.u)
if(r)w.push(j.$1(s))
if(p)w.push(j.$1(q))
return new A.OE(A.byQ(k,k,k,D.am_,l,D.C2,D.Ee,D.Ej,w,D.afL,k,m,k,n,D.XS,D.am0,D.a99),C.av,C.ah,k,k)}}
A.Uc.prototype={
u(d){var w,v,u,t,s,r,q=null,p=this.c.d
if(p.length===0)return D.aNH
w=C.b.fn(p,0,new A.b6w())
v=w>0?w*1.15:10
u=B.b([],x.O)
for(t=x.Y,s=0;s<p.length;++s){r=p[s]
u.push(A.ayq(B.b([A.a1k(q,q,D.Bt,q,C.m,q,q,q,r.b,6),A.a1k(q,q,D.Bt,q,C.j,q,q,q,r.c,6)],t),2,q,q,s))}return B.ch(A.bEK(A.ayj(q,q,u,q,q,A.a5D(q,!1),q,new A.yF(!0,!0,q,new A.b6x(),A.a_J(),!1,q,A.avN(),A.a_J()),q,v,q,q,new A.uZ(!0,new A.po(16,q,new A.qj(!0,new A.b6y(this),46,q),!0),D.kx,D.kx,new A.po(16,q,new A.qj(!0,new A.b6z(p),26,q),!0)))),this.d,q)},
aLY(d){if(Math.abs(d)>=1000)return C.d.ae(d/1000,1)+" k"
return C.d.ae(d,0)}}
A.Un.prototype={
u(d){var w,v,u,t,s,r,q=null,p=B.b(["Aktuell","Vormonat","Vorjahr"],x.s),o=this.c,n=o.a,m=o.c
o=o.b
w=x.n
v=B.b([n.c,m.c,o.c],w)
u=B.b([n.e,m.e,o.e],w)
w=x.gj
o=B.Q(new B.ae(v,new A.b7m(),w),x.i)
C.b.K(o,new B.ae(u,new A.b7n(),w))
t=C.b.fn(o,0,new A.b7o())
o=t>0?t*1.2:10
n=B.b([],x.O)
for(m=x.Y,s=0;s<3;++s)n.push(A.ayq(B.b([A.a1k(q,q,q,q,C.m,q,q,q,v[s],14),A.a1k(q,q,q,q,C.aE,q,q,q,u[s],14)],m),4,q,q,s))
r=B.ch(A.bEK(A.ayj(q,q,n,q,q,A.a5D(q,!1),q,D.Ej,q,o,q,q,new A.uZ(!0,D.kx,D.kx,D.kx,new A.po(16,q,new A.qj(!0,new A.b7p(p),26,q),!0)))),this.d,q)
return this.e?r:B.by(q,r,q,q,C.C,q,3)}}
A.ank.prototype={
u(d){var w,v,u,t,s,r,q,p,o,n,m=null,l="Hanken Grotesk",k=this.c.e
if(k.length===0)return D.aNG
w=new B.ae(k,new A.bh2(),B.aa(k).i("ae<1,F>")).kx(0,new A.bh3())
v=x.p
u=B.b([],v)
for(t=k.length,s=0;s<k.length;k.length===t||(0,B.G)(k),++s){r=k[s]
q=B.k(r.b,m,m,m,new B.P(!0,C.j,m,l,C.bz,m,14,C.q,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)
p=$.d3()
o=p.am(r.f)
q=B.ad(B.b([q,B.k(""+r.e+" Verk\xe4ufe \xb7 \xd8 "+o,m,m,m,new B.P(!0,C.p,m,l,C.bz,m,12,C.aI,m,m,m,m,1.5,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),C.D,m,C.f,C.h,0)
o=r.d
p=p.am(o)
n=new B.aX(4,4)
o=B.b([new B.iC(C.ay,C.f,C.h,C.k,m,C.bA,m,0,B.b([new B.kR(1,C.dX,q,m),C.aV,B.k(p,m,m,m,new B.P(!0,C.j,m,"Bricolage Grotesque",C.bz,m,16,C.q,m,-0.32,m,m,1.15,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m)],v),m),C.d6,new B.DJ(new B.d9(n,n,n,n),C.bM,B.OH(C.am,8,C.d.bS(o/w,0,1),D.Bi),m)],v)
q=C.b.gaf(k)
if(r!==q)q=B.L(r)===B.L(q)&&B.a_N(r.gbE(),q.gbE())
else q=!0
if(!q)o.push(C.u)
C.b.K(u,o)}return B.by(m,B.ad(u,C.k,m,C.f,C.h,0),m,m,C.C,m,3)}}
A.ajB.prototype={
u(d){var w,v,u=null,t=this.c.r,s=t.c,r=s>0?t.b/s:0
s=B.az(new A.Cu("Aktive Kunden",""+s,u),1)
w=B.az(new A.Cu("K\xe4ufe",""+t.a,u),1)
v=$.d3()
return B.by(u,B.ap(B.b([s,w,B.az(new A.Cu("\xd8-Warenkorb",v.am(t.d),u),1),B.az(new A.Cu("Umsatz/Kunde",v.am(r),u),1)],x.p),C.k,u,C.f,C.h,0,u,u),u,u,C.C,u,3)}}
A.Cu.prototype={
u(d){var w=null
return B.ad(B.b([B.k(this.c.toUpperCase(),w,w,w,B.D(C.p,10,C.q).fZ(0.6),w,w,w),C.bW,B.k(this.d,w,w,w,B.c8(C.j,20,C.q),w,w,w)],x.p),C.D,w,C.f,C.H,0)}}
A.ata.prototype={
u(d){var w,v,u,t,s,r,q,p,o=null,n="Hanken Grotesk",m=this.c.f,l=new B.ae(m,new A.bqA(),B.aa(m).i("ae<1,F>")).kx(0,new A.bqB()),k=x.p,j=B.b([],k)
for(w=m.length,v=0;v<m.length;m.length===w||(0,B.G)(m),++v){u=m[v]
t=B.k(u.b,1,C.ak,o,new B.P(!0,C.j,o,n,C.bz,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
s=B.k(""+u.c+"\xd7 ",o,o,o,new B.P(!0,C.p,o,n,C.bz,o,12,C.S,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
r=u.d
q=$.d3().am(r)
p=new B.aX(4,4)
r=B.b([new B.iC(C.ay,C.f,C.h,C.k,o,C.bA,o,0,B.b([new B.kR(1,C.dX,t,o),s,B.k(q,o,o,o,new B.P(!0,C.j,o,n,C.bz,o,13,C.q,o,o,o,o,1.5,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)],k),o),C.b3,new B.DJ(new B.d9(p,p,p,p),C.bM,B.OH(C.am,6,C.d.bS(r/l,0,1),D.Bi),o)],k)
t=C.b.gaf(m)
if(u!==t)t=B.L(u)===B.L(t)&&B.a_N(u.gbE(),t.gbE())
else t=!0
if(!t)r.push(C.M)
C.b.K(j,r)}return B.by(o,B.ad(j,C.k,o,C.f,C.h,0),o,o,C.C,o,3)}}
A.wP.prototype={
u(d){var w=null
return B.by(w,B.k(this.c,w,w,w,B.D(C.p,13,C.l),w,w,w),C.ae,w,C.C,w,3)}}
A.ahT.prototype={
dg(d,e){return B.dz(e.an($.bx2(),x.fM),new A.b50(this,d,e),new A.b51(),new A.b52(),!1,!0,!1,x.h,x.l)}}
A.Bu.prototype={
W(){return new A.TQ()},
aZi(){return this.d.$0()}}
A.TQ.prototype={
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
w.S$=0}this.ap()},
rA(d){var w=this.e
w===$&&B.a()
w=C.c.aL(w.h(0,d).a.a)
w=B.ay(w,".","")
w=B.fX(B.ay(w,",","."))
return w==null?0:w},
a4F(d){var w,v,u,t,s
for(w=0;w<8;++w){v=D.pB[w].a
u=d.h(0,v)
if(u!=null){t=this.e
t===$&&B.a()
t=t.h(0,v)
t.toString
s=C.d.ae(u,2)
s=B.ay(s,".",",")
t.lS(0,t.a.ym(C.aG,C.bb,s))}}this.J(new A.b4P())},
aFQ(){this.a4F(D.aq8)
this.c.O(x.q).f.aW(D.aAX)},
Ix(){var w=0,v=B.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$Ix=B.m(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:a1=x.N
a2=B.b3(a1)
for(e=0;e<8;++e)a2.E(0,D.pB[e].a)
q=a2
t=4
w=7
return B.j($.aFD.cd().zG(B.b(["csv","txt"],x.s),C.xR,!0),$async$Ix)
case 7:p=a5
a2=p
o=a2==null?null:J.Kk(a2.a).c
if(o==null){w=1
break}n=C.aB.ae9(0,o,!0)
m=B.z(a1,x.i)
for(a1=C.C7.cD(n),a2=a1.length,e=0;e<a1.length;a1.length===a2||(0,B.G)(a1),++e){l=a1[e]
k=J.aww(l,B.bO("[;,\t]",!0,!1,!1))
if(J.cf(k)<2)continue
j=C.c.aL(J.a_(k,0)).toLowerCase()
i=J.CX(q,j)?j:D.asl.h(0,j)
if(i==null)continue
d=C.c.aL(C.b.na(J.bRG(k,1)))
d=B.ay(d,"\u20ac","")
d=B.ay(d," ","")
d=B.ay(d,".","")
h=B.ay(d,",",".")
g=B.fX(h)
if(g!=null)J.fu(m,i,g)}a1=r.c
if(a1==null){w=1
break}if(m.a===0){a1.O(x.q).f.aW(D.aAx)
w=1
break}r.a4F(m)
r.c.O(x.q).f.aW(B.c5(null,null,null,null,null,C.n,null,B.k(""+m.a+" Werte aus Datei \xfcbernommen.",null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
t=2
w=6
break
case 4:t=3
a3=s.pop()
f=B.a2(a3)
a1=r.c
if(a1==null){w=1
break}a1.O(x.q).f.aW(B.c5(null,null,null,null,null,C.n,null,B.k("Import fehlgeschlagen: "+B.i(f),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$Ix,v)},
IJ(){var w=0,v=B.q(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l
var $async$IJ=B.m(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:q.J(new A.b4Q(q))
t=4
o=q.a.e
n=q.d
n===$&&B.a()
n=o.b0R("upsert_finance_balance",B.a4(["p_as_of",C.c.a_(n.dS(),0,10),"p_cash_and_bank",q.rA("cash_and_bank"),"p_receivables",q.rA("receivables"),"p_inventory_value",q.rA("inventory_value"),"p_other_current_assets",q.rA("other_current_assets"),"p_fixed_assets",q.rA("fixed_assets"),"p_current_liabilities",q.rA("current_liabilities"),"p_long_term_liabilities",q.rA("long_term_liabilities"),"p_equity",q.rA("equity")],x.N,x.aU))
w=7
return B.j(n,$async$IJ)
case 7:if(q.c==null){r=[1]
w=5
break}q.a.aZi()
o=q.c
o.toString
B.b6(o,!1).fg()
q.c.O(x.q).f.aW(D.aAB)
r.push(6)
w=5
break
case 4:t=3
l=s.pop()
p=B.a2(l)
o=q.c
if(o==null){r=[1]
w=5
break}o.O(x.q).f.aW(B.c5(null,null,null,null,null,C.n,null,B.k("Speichern fehlgeschlagen: "+B.i(p),null,null,null,null,null,null,null),null,C.I,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.J(new A.b4R(q))
w=r.pop()
break
case 6:case 1:return B.o(u,v)
case 2:return B.n(s.at(-1),v)}})
return B.p($async$IJ,v)},
u(d){var w,v,u,t,s=this,r=null,q=B.k("Bilanzwerte erfassen",r,r,r,B.c8(C.j,18,C.q),r,r,r),p=s.f?r:new A.b4T(s,d),o=s.d
o===$&&B.a()
p=B.fV(D.acj,B.k("Stichtag: "+C.c.a_(o.dS(),0,10),r,r,r,r,r,r,r),p,r)
o=s.f
w=B.az(B.fV(D.adu,D.aGM,o?r:s.gaEK(),r),1)
v=x.p
w=B.b([p,C.M,B.ap(B.b([w,C.aV,B.az(B.fV(D.adi,D.aGz,o?r:s.gaFP(),r),1)],v),C.k,r,C.f,C.h,0,r,r),C.u],v)
for(u=0;u<8;++u){p=D.pB[u]
o=s.e
o===$&&B.a()
C.b.K(w,B.b([B.dH(r,C.aw,!1,r,!0,C.n,r,B.dP(),o.h(0,p.a),r,r,r,r,r,2,new B.c_(r,r,r,p.b+" (EUR)",r,r,r,r,r,r,r,r,r,r,r,r,!0,!0,!1,r,r,r,r,r,r,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!0,r,r,r,r),C.a4,!0,r,!0,r,!1,r,C.aA,r,r,r,r,r,C.ez,r,r,r,1,r,r,!1,"\u2022",r,r,r,r,r,!1,r,r,!1,r,!0,r,C.C,r,r,r,r,r,r,r,r,r,r,r,r,!0,C.ab,r,C.X,r,r,r,r),C.M],v))}w.push(B.k("Werte lt. sevDesk-Bilanz bzw. Kontoauszug. Der sp\xe4tere sevDesk-Sync \xfcberschreibt den Stichtag automatisch.",r,r,r,B.D(C.p,11,C.l),r,r,r))
p=B.ch(B.et(B.ad(w,C.a8,r,C.f,C.H,0),r,r,r,C.K),r,380)
o=s.f
w=B.d7(C.bZ,r,r,o?r:new A.b4U(d),r,r)
o=o?r:s.gaFx()
t=B.dK(C.m,C.A,r,r,r,r,r)
return B.iu(B.b([w,B.dl(s.f?F.Z7:C.dt,o,t)],v),C.A,p,q)}}
A.bk.prototype={
k(d,e){var w
if(e==null)return!1
if(this!==e)w=x.E.b(e)&&B.L(this)===B.L(e)&&B.a_N(this.gbE(),e.gbE())
else w=!0
return w},
gA(d){return(B.ea(B.L(this))^B.bMO(this.gbE()))>>>0},
j(d){B.bFZ()
return B.L(this).j(0)}}
A.L3.prototype={
W(){return new A.TR(B.z(x.S,x.J),new A.ayt(B.z(x.x,x.gF)),null,null)}}
A.TR.prototype={
u(d){var w,v=this,u=v.a2z(),t=v.CW
t.toString
t=v.a2A(t.aw(0,v.gh9().gq(0)))
w=v.a2A(u)
v.a.toString
return new A.KZ(new A.a1j(t,w,null),u,null)},
a2A(d){var w,v,u,t,s,r
if(!d.cy.a)return d
w=B.b([],x.O)
for(v=d.ch,u=this.cy,t=0;t<v.length;++t){s=v[t]
r=u.h(0,t)
if(r==null)r=s.e
w.push(A.ayq(s.c,s.d,!1,r,s.a))}return d.aR8(w)},
a2z(){var w,v,u=this,t=u.a.r,s=t.x,r=isNaN(s)
if(r||isNaN(t.y)){w=u.db.Vh(t.ch)
if(r)s=w.a
r=t.y
t=t.aS4(isNaN(r)?w.b:r,s)}v=t.cy
if(v.a){u.cx=v.b
return t.aR9(A.bxA(!1,!0,!0,v.d,v.c,u.gatj(),v.f,v.e))}return t},
atk(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(!d.gagH()||e==null||e.a==null){w=v.cy
v.J(w.gaQw(w))
return}v.J(new A.b55(v,e))},
m8(d){var w=this
w.CW=x.bn.a(d.$3(w.CW,w.a2z(),new A.b56(w)))}}
A.o4.prototype={
VU(d,e,f,g){var w=this,v=d==null?w.ch:d,u=e==null?w.cy:e,t=f==null?w.y:f,s=g==null?w.x:g
return A.ayj(w.cx,w.as,v,u,w.z,w.a,w.at,w.c,w.CW,t,s,w.e,w.d)},
aS4(d,e){return this.VU(null,null,d,e)},
aR9(d){return this.VU(null,d,null,null)},
aR8(d){return this.VU(d,null,null,null)},
XR(d,e,f){var w,v,u,t=A.kB(d.ch,e.ch,f,A.c5l(),x.dB),s=B.ah(d.CW,e.CW,f),r=A.bG6(d.d,e.d,f),q=A.bI3(d.e,e.e,f),p=A.bG4(d.c,e.c,f),o=e.a
o=A.a5D(B.a1B(d.a.b,o.b,f),o.a)
w=B.ah(d.y,e.y,f)
v=B.ah(d.x,e.x,f)
u=B.ah(d.z,e.z,f)
r=A.ayj(e.cx,B.a1(d.as,e.as,f),t,e.cy,u,o,A.bG0(d.at,e.at,f),p,s,w,v,q,r)
return r},
gbE(){var w=this
return[w.ch,w.CW,w.cx,w.d,w.cy,w.y,w.x,w.z,w.c,w.a,w.e,w.as,w.at]}}
A.ayi.prototype={
L(){return"BarChartAlignment."+this.b}}
A.fO.prototype={
gdt(d){var w,v=this.c
if(v.length===0)return 0
w=new B.ae(v,new A.ayr(),B.aa(v).i("ae<1,F>")).kx(0,new A.ays())
v=v.length
return w+(v-1)*this.d},
gbE(){var w=this
return[w.a,!1,w.c,w.d,w.e]}}
A.iv.prototype={
gbE(){var w=this
return[w.a,w.b,w.e,w.f,w.r,w.w,w.x,w.y,w.c,w.d]}}
A.mO.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a1h.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.a1l.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,!1,!0]}}
A.aeu.prototype={
L(){return"TooltipDirection."+this.b}}
A.a1m.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,!1,!1,w.z,w.Q,w.as]}}
A.Dk.prototype={
gbE(){return[this.a,this.b,C.cF,C.w,null]}}
A.L4.prototype={}
A.a1n.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.a,w.b]}}
A.xL.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XR(v,w,d)}}
A.ahP.prototype={}
A.ahW.prototype={}
A.ahX.prototype={}
A.ahZ.prototype={}
A.ai_.prototype={}
A.ai0.prototype={}
A.ai1.prototype={}
A.ai2.prototype={}
A.ai3.prototype={}
A.ayt.prototype={
Vh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
if(d.length===0)return new A.uC(0,0,!1)
v=new A.zx(d,x.x)
u=this.a
if(u.aF(0,v)){u=u.h(0,v)
t=u.a
u=u.b
return new A.uC(t,u,!0)}w=null
try{w=C.b.qs(d,new A.ayu())}catch(s){return new A.uC(0,0,!1)}r=Math.max(w.c[0].a,w.c[0].b)
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
gbE(){return[this.a,this.b,this.c]}}
A.ahY.prototype={}
A.ayv.prototype={
ig(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a0C(d,e,f)
w=f.a
v=f.b
u=w.ch
if(u.length===0)return
t=e.b
u=l.ad7(t,A.bxz(w,t.a),u)
l.y=u
l.aTr(e,u,f)
l.amQ(d,e,f,t)
for(u=v.ch,t=v.cy.e,s=0;s<u.length;++s){r=u[s]
for(q=r.c,p=r.e,o=0;o<q.length;++o){if(!C.b.n(p,o))continue
n=q[o]
m=l.y
m.toString
l.aTA(d,e,m,t,r,s,n,o,f)}}},
ad7(d,e,f){var w,v,u,t,s,r,q,p
if(e.length!==f.length)throw B.e(B.e7("inconsistent state groupsX.length != barGroups.length"))
w=B.b([],x.K)
for(v=x.n,u=0;u<f.length;++u){t={}
s=f[u]
r=e[u]
t.a=0
q=B.b([],v)
p=s.c
new B.j1(p,B.aa(p).i("j1<1>")).aC(0,new A.ayw(t,q,r,s))
w.push(new A.a6j(q))}return w},
aTr(b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b7.a,b4=b5.b
for(w=b3.ch,v=b5.a.a,u=b3.y,t=b3.x,s=x.v,r=0;r<w.length;++r)for(q=w[r].c,p=0;p<q.length;++p){o=q[p]
n=o.e
m=n/2
l=o.f
if(l==null){k=new B.aX(m,m)
l=new B.d9(k,k,k,k)}j=o.w
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
a4=B.Qj(h,Math.min(b2.dI(a1,b4,b7),a3-a0),g,a3,e,d,k,f)}else{a5=b2.dI(Math.min(u,a2),b4,b7)
a4=B.Qj(h,a5,g,Math.max(b2.dI(a1,b4,b7),a5+a0),e,d,k,f)}k=b2.f
k===$&&B.a()
f=o.c
k.r=(f==null?C.F:f).gq(0)
k.sf0(null)
a6=b2.f.e2()
v.drawRRect(B.mJ(a4),a6)
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
v.clipRect(B.dQ(b1),$.nU()[1],!0)
a6=b2.f.e2()
v.drawRRect(B.mJ(a4),a6)
a6.delete()
v.restore()
b2.aTy(b5,a8,a7,k.length,n,a4,b4,b7)}n=j.b
if(n>0){k=j.a
k=k.gem(k)>0}else k=!1
if(k){k=b2.r
k===$&&B.a()
f=j.a
k.r=f.gq(f)
k.c=n
n=$.ao()
k=B.b([],s)
k.push(new B.hm(a4))
n=A.aBw(new B.cl(n.r,C.af,null,null,k),o.r)
a6=b2.r.e2()
k=n.e
v.drawPath((k==null?n.e=new B.mT(n.gjC().a.snapshot()):k).a,a6)
a6.delete()}}}},
aTA(a8,a9,b0,b1,b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=a9.b,a7=b1.r.$4(b2,b3,b4,b5)
if(a7==null)return
w=B.Bc(a5,a5,a5,a5,B.dk(a5,a5,a5,a5,a5,a5,a5,a5,a5,$.lH().a_C(a8,a7.b),a7.a),C.cF,C.w,a5,b6.c,C.bj)
w.ah_(b1.f)
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
if(v!==D.aJp)j=v===D.ZS&&s>=q
else j=!0
v=b1.c
i=j?l-m-v:k+v
h=a4.a_D(t,n,b1.d,b1.e)
v=h+n
t=i+m
g=new B.I(h,i,v,t)
s=b1.a
f=new B.aX(s,s)
e=B.G4(g,f,f,f,f)
s=a4.w
s===$&&B.a()
r=b1.as.$1(b2)
s.r=r.gq(r)
d=b1.z
v-=h
t-=i
r=$.lH().L_(new B.J(v,t),d).b
s=$.lH()
q=w.b
p=q.c
q=q.a.c
a0=s.L_(new B.J(p,q.gbT(q)),d)
q=g.gc7()
p=w.b.c
s=g.gaja()
a1=b1.Q
if(!a1.k(0,C.N)){a2=a4.x
a2===$&&B.a()
a3=a1.a
a2.r=a3.gq(a3)
a2.c=a1.b}a9.Wx(d,new A.ayx(a4,a9,e,w,new B.r(q.a-p/2,s.b+o.b-a0.b+r)),new B.r(e.a,e.b),new B.r(0,r),new B.J(v,t))},
aTy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o,n=this,m=e.d,l=m.b
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
q=B.Qj(i.a,v,i.c,t,u,s,r,w)}else{w=i.a
v=e.b
u=i.c
t=e.a
if(f===g-1){s=Math.max(n.dI(v,j,k),i.b)
r=n.dI(t,j,k)
v=t<v
t=v?C.a3:new B.aX(i.z,i.Q)
p=v?C.a3:new B.aX(i.x,i.y)
o=v?new B.aX(i.e,i.f):C.a3
q=B.Qj(w,s,u,r,t,p,o,v?new B.aX(i.r,i.w):C.a3)}else q=B.bzx(w,n.dI(v,j,k),u,n.dI(t,j,k),C.a3)}w=n.r
w===$&&B.a()
m=m.a
w.r=m.gq(m)
w.c=Math.min(l,h/2)
d.a.eV(q,n.r)},
X9(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=b3.a,a9=b3.b,b0=a9.ch
if(b0.length===0)return null
if(a7.y==null)a7.y=a7.ad7(b2,A.bxz(a8,b2.a),a8.ch)
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
break}++a3}return new A.a1n(d,q,a0,o,a2,a1,new A.eD(d.a,v),new B.r(n,t))}}return null}}
A.a6j.prototype={}
A.a1j.prototype={
bj(d){var w,v=this.e,u=B.bD(d,null,x.w).w.gcQ(),t=new A.ayv()
t.a1R()
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
t=new A.abw(this.d,v,u,t,d,C.bl,new B.bs(),B.aJ(x.g))
t.bf()
t.Zt(v.cy)
t.aga()
return t},
by(d,e){e.siq(0,this.d)
e.sZd(this.e)
e.scQ(B.bD(d,null,x.w).w.gcQ())
e.B=d
e.bb()}}
A.abw.prototype={
siq(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bb()},
sZd(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a1l(d.cy)
w.bb()},
scQ(d){if(this.cY.k(0,d))return
this.cY=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.bc(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fO.ig(w,new A.a1O(t,v),new A.vI(u.aB,u.i7,u.cY,x.Q))
s.restore()},
a_v(d){var w=this,v=w.gC(0)
return new A.L4(w.fO.X9(d,v,new A.vI(w.aB,w.i7,w.cY,x.Q)))}}
A.a1a.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.a,w.b,w.at]}}
A.Di.prototype={
L(){return"AxisSide."+this.b}}
A.tC.prototype={}
A.qj.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.ad1.prototype={
gbE(){return[!1,0,0,0]}}
A.po.prototype={
gbE(){return[this.b,this.a,this.c,!0]}}
A.uZ.prototype={
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
A.yF.prototype={
gbE(){var w=this
return[w.a,!0,w.c,w.d,w.e,w.f,w.r,w.w,w.x]}}
A.pM.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.aew.prototype={
gbE(){return[this.a,this.b]}}
A.Qn.prototype={
gbE(){return[this.a,this.b]}}
A.n7.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.nC.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.kW.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.ln.prototype={
gbE(){var w=this
return[w.e,w.w,w.a,w.c,w.d,w.f,w.r,w.x]}}
A.a6u.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.aeR.prototype={
gbE(){var w=this
return[w.f,!1,w.b,w.c,w.d,w.e]}}
A.N4.prototype={
gbE(){return[this.a,this.b,!0]}}
A.uY.prototype={}
A.Nb.prototype={
aez(d,e,f){var w,v
$.ao()
w=B.aZ()
v=this.a
w.r=v.gq(v)
w.b=C.bd
d.iX(f,this.b,w)},
gbE(){return[this.a,this.b,this.c,0]}}
A.ahK.prototype={}
A.ahO.prototype={}
A.akW.prototype={}
A.ale.prototype={}
A.alf.prototype={}
A.alh.prototype={}
A.ali.prototype={}
A.am5.prototype={}
A.am4.prototype={}
A.am6.prototype={}
A.apE.prototype={}
A.arz.prototype={}
A.arA.prototype={}
A.ate.prototype={}
A.atU.prototype={}
A.atT.prototype={}
A.atV.prototype={}
A.ay7.prototype={
N7(d,e,f,g,h,i){return new B.ir(this.aXi(d,e,f,g,h,i),x.g4)},
aXh(d,e,f,g){return this.N7(d,e,f,!0,g,!0)},
aXi(d,e,f,g,h,i){return function(){var w=d,v=e,u=f,t=g,s=h,r=i
var q=0,p=1,o=[],n,m,l,k,j,a0
return function $async$N7(a1,a2,a3){if(a2===1){o.push(a3)
q=p}for(;;)switch(q){case 0:m=$.lH().akr(s,u,v,w)
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
A.KY.prototype={
a1R(){var w,v=this
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
ig(d,e,f){var w=this
w.a0E(d,e,f)
w.aTn(e,f)
w.aTx(e,f)
w.aTw(e,f)},
aTw(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=a4.a,a2=a1.c
if(!a2.a)return
w=a3.b
if(a2.f){v=a2.r
if(v==null)v=$.lH().P7(w.a,a1.r-a1.f)
u=$.bwy().N7(a1.w,v,a1.r,!1,a1.f,!1)
for(t=new B.fm(u.a(),u.$ti.i("fm<1>")),s=w.b,r=a2.w,q=a2.x;t.t();){p=t.b
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
p.r=B.aD(0,k.v()>>>16&255,k.v()>>>8&255,k.v()&255).gq(0)}a3.E_(n,m,d.a,l.d)}}h=a2.c
if(h==null)h=$.lH().P7(w.b,a1.y-a1.x)
u=$.bwy().N7(a1.z,h,a1.y,!1,a1.x,!1)
for(t=new B.fm(u.a(),u.$ti.i("fm<1>")),r=a2.d,g=w.a,a2=a2.e;t.t();){q=t.b
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
q.r=B.aD(0,p.v()>>>16&255,p.v()>>>8&255,p.v()&255).gq(0)}a3.E_(n,m,d.a,f.d)}},
aTn(d,e){var w,v,u=e.a.as
if((u.v()>>>24&255)/255===0)return
w=d.b
v=this.b
v===$&&B.a()
v.r=u.gq(0)
d.a.hg(new B.I(0,0,0+w.a,0+w.b),this.b)},
aTx(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=d.b,l=e.a.e,k=l.b,j=k.length
if(j!==0)for(w=d.a.a,v=m.b,u=0;u<k.length;k.length===j||(0,B.G)(k),++u){t=k[u]
s=B.lb(new B.r(n.fh(t.a,m,e),0),new B.r(n.fh(t.b,m,e),v))
r=n.e
r===$&&B.a()
q=t.c
p=t.d
if(p!=null){r.r=C.E.gq(0)
r.sf0(p.nQ(0,s))}else{r.r=(q==null?C.F:q).gq(0)
r.sf0(null)}o=n.e.e2()
w.drawRect(B.dQ(s),o)
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
j.drawRect(B.dQ(s),o)
o.delete()}},
aTv(d,e,f){var w,v
this.a0E(d,e,f)
w=e.b
v=f.a.at
if(v.a.length!==0)this.aeA(d,e,f,w)
if(v.b.length!==0)this.aTC(d,e,f,w)},
aeA(d,e,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
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
e.E_(m,l,f.c,p.d)
n=p.r
h=n.gdt(n).eK(0,2)
g=C.d.ao(o,n.gbT(n).eK(0,2))
J.bc(r.save())
r.translate(h,g)
n=n.gO0().b
n===$&&B.a()
n=n.a
n===$&&B.a()
n=n.a
n.toString
r.drawPicture(n)
r.restore()
n=p.f
h=n.gdt(n).eK(0,2)
o=C.d.ao(o,n.gbT(n).eK(0,2))
k=f.d
k===$&&B.a()
s.aeB(0,n,new B.r(h,o),k)}}},
aTC(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
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
a1.E_(m,l,d.c,p.d)
n=p.r
h=n.gdt(n).eK(0,2)
g=n.gbT(n).eK(0,2)
f=C.d.ao(o,h)
e=C.d.ao(u,g)
J.bc(r.save())
r.translate(f,e)
n=n.gO0().b
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
o=C.d.ao(o,h)
k=C.d.ao(u,g)
j=d.d
j===$&&B.a()
s.aeB(0,n,new B.r(o,k),j)}}},
fh(d,e,f){var w=f.a,v=w.f,u=w.r-v
if(u===0)return 0
return(d-v)/u*e.a},
dI(d,e,f){var w,v=f.a,u=v.x,t=v.y-u
if(t===0)return e.b
w=e.b
return w-(d-u)/t*w},
a_D(d,e,f,g){switch(f.a){case 0:return d-e/2+g
case 2:return d+g
case 1:return d-e+g}}}
A.KZ.prototype={
gamb(){var w,v=this.d.d
if(!v.a)return!1
v=v.b.c
w=v.a&&v.c!==0
return w},
gamc(){var w,v=this.d.d
if(!v.a)return!1
v=v.d.c
w=v.a&&v.c!==0
return w},
gamd(){var w,v=this.d.d
if(!v.a)return!1
v=v.c.c
w=v.a&&v.c!==0
return w},
gam9(){var w,v=this.d.d
if(!v.a)return!1
v=v.e.c
w=v.a&&v.c!==0
return w},
amv(d){var w,v=this,u=null,t=v.d,s=A.byn(t.d),r=t.a
r=r.a&&A.bSg(r.b)?r.b:u
w=B.b([B.b9(u,v.c,C.r,u,u,new B.b5(u,u,r,u,u,u,C.G),u,u,u,s,u,u,u,u)],x.p)
s=new A.ay9(w)
if(v.gamb())C.b.hz(w,s.$1(!0),new A.AZ(D.Bp,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gamd())C.b.hz(w,s.$1(!0),new A.AZ(D.mJ,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gamc())C.b.hz(w,s.$1(!0),new A.AZ(D.Bq,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
if(v.gam9())C.b.hz(w,s.$1(!0),new A.AZ(D.dN,t,new B.J(B.N(1/0,d.a,d.b),B.N(1/0,d.c,d.d)),u))
return w},
u(d){return B.ia(new A.ay8(this))}}
A.RM.prototype={
W(){return new A.Yo(new B.bl(null,x.eF))}}
A.Yo.prototype={
ayX(){switch(this.a.c.a){case 0:return C.hG
case 1:return C.fi
case 2:return C.dK
case 3:return C.fj}},
azs(){switch(this.a.c.a){case 0:return new B.al(0,0,8,0)
case 1:return new B.al(0,0,0,8)
case 2:return new B.al(8,0,0,0)
case 3:return new B.al(0,8,0,0)}},
ayZ(d){this.a.toString
return},
au(){this.aM()
$.cx.x1$.push(this.ga57())},
bd(d){this.bD(d)
$.cx.x1$.push(this.ga57())},
u(d){var w,v=this,u=null,t=v.a
t.toString
w=v.azs()
return B.SZ(B.b2l(0,B.b9(v.ayX(),t.e,C.r,u,u,u,u,u,v.d,w,u,u,u,u)),C.t)}}
A.ad2.prototype={
bj(d){return A.bS7(this.f,this.r,this.e)},
by(d,e){var w=this.e
if(e.B!==w){e.B=w
e.a7()}w=this.f
if(e.U!==w){e.U=w
e.a7()}w=this.r
if(e.V!==w){e.V=w
e.a7()}}}
A.a1b.prototype={
h7(d){if(!(d.b instanceof B.ht))d.b=new B.ht(null,null,C.t)},
i_(d){if(this.B===C.ay)return this.yu(d)
return this.aed(d)},
aM8(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a9U(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
dE(d){var w=this.a9T(d,B.hJ())
switch(this.B.a){case 0:return d.c2(new B.J(w.a,w.b))
case 1:return d.c2(new B.J(w.b,w.a))}},
a9T(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.B===C.ay?d.b:d.d,m=o.ag$
for(w=x.L,v=d.b,u=d.d,t=0,s=0;m!=null;){r=m.b
r.toString
w.a(r)
switch(o.B.a){case 0:q=B.h6(u,null)
break
case 1:q=B.h6(null,v)
break
default:q=null}p=e.$2(m,q)
s+=o.a9U(p)
t=Math.max(t,o.aM8(p))
m=r.aH$}return new A.bgE(n<1/0?n:s,t)},
cw(){var w,v,u,t,s,r,q,p=this,o=x.k.a(B.K.prototype.ga5.call(p)),n=p.a9T(o,B.mI()),m=n.a,l=n.b
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
q=s.b-p.a9U(r==null?B.U(B.Z("RenderBox was not laid out: "+B.L(w).j(0)+"#"+B.c7(w))):r)/2
switch(p.B.a){case 0:r=new B.r(q,0)
break
case 1:r=new B.r(0,q)
break
default:r=null}t.a=r
w=t.aH$;++u}},
ee(d,e){return this.yv(d,e)},
aO(d,e){if(this.gC(0).gZ(0))return
this.a3.sbh(0,null)
this.vn(d,e)},
l(){this.a3.sbh(0,null)
this.apo()}}
A.bgE.prototype={}
A.aya.prototype={}
A.jW.prototype={
gbE(){return[this.a,this.b]}}
A.o3.prototype={}
A.ahL.prototype={}
A.ahM.prototype={
aJ(d){var w,v,u
this.fl(d)
w=this.ag$
for(v=x.L;w!=null;){w.aJ(d)
u=w.b
u.toString
w=v.a(u).aH$}},
aE(d){var w,v,u
this.f9(0)
w=this.ag$
for(v=x.L;w!=null;){w.aE(0)
u=w.b
u.toString
w=v.a(u).aH$}}}
A.ahN.prototype={}
A.TO.prototype={
l(){var w,v,u
for(w=this.WL$,v=w.length,u=0;u<v;++u)w[u].l()
this.iz()}}
A.AZ.prototype={
goO(){var w=this
switch(w.c.a){case 0:return w.d.d.b
case 1:return w.d.d.c
case 2:return w.d.d.d
case 3:return w.d.d.e}},
ghL(){switch(this.c.a){case 0:return C.dK
case 1:return C.fj
case 2:return C.hG
case 3:return C.fi}},
gb12(){var w=this.d,v=A.byn(w.d),u=A.bG3(w.a)
switch(this.c.a){case 2:case 0:return new B.al(0,v.b,0,v.d).ad(0,new B.al(0,u.b,0,u.d))
case 1:case 3:return new B.al(v.a,0,v.c,0).ad(0,new B.al(u.a,0,u.c,0))}},
gaiY(){var w=this.d,v=A.bG3(w.a),u=A.byn(w.d)
switch(this.c.a){case 2:case 0:return u.gd4(0)+u.gd7(0)+(v.gd4(0)+v.gd7(0))
case 1:case 3:return u.geB()+v.geB()}},
aY1(d,e,f,g){var w,v,u,t,s,r,q,p=this,o=p.goO().c.d
if(o==null)o=$.lH().P7(d,f-e)
w=p.c
v=w!==D.mJ
if((!v||w===D.dN)&&p.d instanceof A.o4){u=x.B.a(p.d)
if(u.ch.length===0)return B.b([],x.M)
t=A.bxz(u,d)
w=new B.j1(t,B.aa(t).i("j1<1>"))
s=w.gi1(w).eQ(0,new A.b_j(u),x.W).fH(0)}else{r=$.bwy()
w=!v||w===D.dN
v=p.d
q=r.aXh(w?v.w:v.z,o,f,e)
v=B.nf(q,new A.b_k(p,f,e,d),q.$ti.i("t.E"),x.W)
s=B.Q(v,B.l(v).i("t.E"))}w=B.aa(s).i("ae<1,o3>")
w=B.Q(new B.ae(s,new A.b_l(p,e,f,o,g,d),w),w.i("ax.E"))
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
if(w===D.Bp||v)j.goO()
if(j.goO().c.a){v=!u||w===D.dN?r:j.goO().c.c
p=!u||w===D.dN?j.goO().c.c:r
o=j.gb12()
n=!u||w===D.dN?C.ay:C.K
j.gaiY()
m=j.gaiY()
l=!u||w===D.dN
k=j.d
l=l?k.f:k.x
u=!u||w===D.dN?k.r:k.y
q.push(B.b9(i,A.bZu(new A.aya(),n,j.aY1(r-m,l,u,w)),C.r,i,i,i,i,p,i,o,i,i,i,v))}if(w===D.Bq||w===D.dN)j.goO()
return new B.eQ(t,i,i,B.bUZ(q,C.k,s,i,C.f,C.H,0,i,i,C.bA),i)}}
A.a1p.prototype={
gbE(){return[this.a,this.b]}}
A.a5C.prototype={
gbE(){return[this.a,this.b]}}
A.Ni.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.a5E.prototype={
gaco(d){return!1},
gbE(){return[!1,!1,!1,!1]}}
A.ayG.prototype={}
A.aF_.prototype={
L(){return"FLHorizontalAlignment."+this.b}}
A.ai6.prototype={}
A.alb.prototype={}
A.alc.prototype={}
A.alj.prototype={}
A.L7.prototype={
ig(d,e,f){}}
A.vI.prototype={}
A.hs.prototype={
gdQ(){return null},
gagH(){var w,v=this
B.bA()
B.bA()
B.bA()
w=v instanceof A.Nh
if(w)return!0
return!(v instanceof A.Ne)&&!(v instanceof A.Nd)&&!(v instanceof A.Nf)&&!(v instanceof A.Nc)&&!w&&!(v instanceof A.Ng)}}
A.a5I.prototype={
gdQ(){return this.a.b}}
A.a5J.prototype={
gdQ(){return this.a.b}}
A.a5K.prototype={
gdQ(){return this.a.b}}
A.Nd.prototype={}
A.Ne.prototype={}
A.a5N.prototype={
gdQ(){return this.a.b}}
A.Ng.prototype={}
A.Nh.prototype={
gdQ(){return this.a.b}}
A.a5H.prototype={
gdQ(){return this.a.b}}
A.a5G.prototype={
gdQ(){return this.a.b}}
A.Nc.prototype={
gdQ(){return this.a.b}}
A.a5L.prototype={
gdQ(){return this.a.gdQ()}}
A.a5M.prototype={
gdQ(){return this.a.gdQ()}}
A.Nf.prototype={
gdQ(){return this.a.gdQ()}}
A.Gh.prototype={
Zt(d){this.U=d.b
this.V=d.c
this.a3=d.d},
aga(){var w=this,v=null,u=w.ak=B.bzb(v,v)
u.ay=new A.aVt(w)
u.ch=new A.aVu(w)
u.CW=new A.aVv(w)
u.cy=new A.aVw(w)
u.cx=new A.aVx(w)
u=w.aG=B.H6(v,-1,v)
u.B=new A.aVy(w)
u.a4=new A.aVz(w)
u.U=new A.aVA(w)
u=w.bx=B.a7E(v,w.a3,v)
u.p3=new A.aVB(w)
u.p4=new A.aVC(w)
u.RG=new A.aVD(w)},
cw(){var w=x.k.a(B.K.prototype.ga5.call(this))
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
w.oL(d)}else if(x.gJ.b(d))v.lg(new A.a5M(d))},
gNz(d){return new A.aVE(this)},
gNB(d){return new A.aVF(this)},
lg(d){var w,v,u=this
if(u.U==null)return
w=d.gdQ()
v=w!=null?u.a_v(w):null
u.U.$2(d,v)
u.a4=C.bl},
gLt(d){return this.a4},
gFW(){var w=this.aq
w===$&&B.a()
return w},
aJ(d){this.fl(d)
this.aq=!0},
aE(d){this.aq=!1
this.f9(0)},
$ijC:1}
A.OE.prototype={
W(){return new A.Wa(B.b([],x.r),B.z(x.S,x.J),new A.aLd(B.z(x.y,x.dj)),null,null)}}
A.Wa.prototype={
u(d){var w,v=this,u=v.a59(),t=v.CW
t.toString
t=v.abU(t.aw(0,v.gh9().gq(0)))
w=v.abU(u)
v.a.toString
return new A.KZ(new A.a7v(t,w,null),u,null)},
abU(d){var w,v
if(!d.cx.a)return d
w=d.ch
v=B.aa(w).i("ae<1,ee>")
w=B.Q(new B.ae(w,new A.bgJ(this,d),v),v.i("ax.E"))
return d.aS1(w,this.cy)},
a59(){var w,v,u,t,s=this,r=s.a.r,q=r.f,p=isNaN(q)
if(p||isNaN(r.r)||isNaN(r.x)||isNaN(r.y)){w=s.dx.Vh(r.ch)
if(p)q=w.a
p=r.r
if(isNaN(p))p=w.b
v=r.x
if(isNaN(v))v=w.c
u=r.y
r=r.aSg(p,isNaN(u)?w.d:u,q,v)}t=r.cx
if(t.a){s.cx=t.b
r=r.aRF(new A.F7(t.e,t.f,t.r,t.w,!0,t.y,t.z,!0,s.gaAh(),t.c,t.d))}return r},
aAi(d,e){var w,v=this
if(v.c==null)return
w=v.cx
if(w!=null)w.$2(d,e)
if(d.gagH())w=(e==null?null:e.a)==null||e.a.length===0
else w=!0
if(w){v.J(new A.bgH(v))
return}v.J(new A.bgI(v,e))},
m8(d){var w=this
w.CW=x.f3.a(d.$3(w.CW,w.a59(),new A.bgK(w)))}}
A.pW.prototype={
XR(d,e,f){var w,v,u,t,s,r,q=B.ah(d.f,e.f,f),p=B.ah(d.r,e.r,f),o=B.ah(d.w,e.w,f),n=B.ah(d.x,e.x,f),m=B.ah(d.y,e.y,f),l=B.ah(d.z,e.z,f),k=B.a1(d.as,e.as,f),j=e.a
j=A.a5D(B.a1B(d.a.b,j.b,f),j.a)
w=A.bG0(d.at,e.at,f)
v=A.bG4(d.c,e.c,f)
u=A.bG6(d.d,e.d,f)
t=A.bI3(d.e,e.e,f)
s=A.kB(d.ch,e.ch,f,A.c7s(),x.cz)
s.toString
r=A.kB(d.CW,e.CW,f,A.c7r(),x.bO)
r.toString
u=A.byQ(k,o,l,r,j,e.Q,w,v,s,e.cx,p,m,q,n,t,e.cy,u)
return u},
VV(d,e,f,g,h,i,j){var w=this,v=d==null?w.ch:d,u=e==null?w.cx:e,t=j==null?w.cy:j,s=h==null?w.f:h,r=f==null?w.r:f,q=i==null?w.x:i,p=g==null?w.y:g
return A.byQ(w.as,w.w,w.z,w.CW,w.a,w.Q,w.at,w.c,v,u,r,p,s,q,w.e,t,w.d)},
aSg(d,e,f,g){return this.VV(null,null,d,e,f,g,null)},
aRF(d){var w=null
return this.VV(w,d,w,w,w,w,w)},
aS1(d,e){var w=null
return this.VV(d,w,w,w,w,w,e)},
gbE(){var w=this
return[w.ch,w.CW,w.d,w.at,w.cx,w.cy,w.c,w.a,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as]}}
A.ee.prototype={
as0(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=null
try{l=C.b.qs(n.a,new A.aLc())}catch(w){}if(l!=null){for(v=n.a,u=v.length,t=m,s=t,r=s,q=r,p=0;p<v.length;v.length===u||(0,B.G)(v),++p){o=v[p]
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
adR(d,e){var w=this,v=e==null?w.a:e,u=d==null?w.cx:d
return A.aLb(w.ch,w.x,w.ay,w.r,w.z,w.cy,w.CW,w.w,w.y,!1,w.at,!1,w.dy,!1,w.as,w.db,!0,u,v)},
aRM(d){return this.adR(d,null)},
aRO(d){return this.adR(null,d)},
gbE(){var w=this
return[w.a,!0,w.r,w.w,w.x,w.y,w.z,!1,w.as,w.at,!1,w.ay,w.ch,w.CW,w.cx,w.cy,w.db,!1,w.dy]}}
A.OF.prototype={
gbE(){return[this.a]}}
A.a1i.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,!1]}}
A.mP.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d]}}
A.L2.prototype={
gbE(){return[!1,this.b,this.c,!0]}}
A.yE.prototype={
gbE(){return[this.a,this.b,this.c]}}
A.aL1.prototype={
L(){return"LabelDirection."+this.b}}
A.a5F.prototype={
gbE(){var w=this
return[!1,w.b,w.c,w.d,w.e]}}
A.F7.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,!0,w.y,w.z]}}
A.a7w.prototype={
gbE(){return[4,C.hZ,16,D.xO,0,120,A.c7u(),!1,!1,!1,0,C.N,A.c7t()]}}
A.nd.prototype={
gbE(){var w=this
return[w.c,w.d,w.e,w.a,w.b]}}
A.qt.prototype={}
A.rI.prototype={
gbE(){return[this.a,this.b,C.cF,C.w,null]}}
A.tD.prototype={
gbE(){return[this.a,this.b]}}
A.GJ.prototype={
gbE(){return[this.a]}}
A.OG.prototype={}
A.zr.prototype={
hk(d){var w,v=this.a
v.toString
w=this.b
w.toString
return v.XR(v,w,d)}}
A.ahU.prototype={}
A.ahV.prototype={}
A.ai7.prototype={}
A.ald.prototype={}
A.alg.prototype={}
A.amY.prototype={}
A.amZ.prototype={}
A.an_.prototype={}
A.an1.prototype={}
A.an2.prototype={}
A.an3.prototype={}
A.an4.prototype={}
A.ary.prototype={}
A.atd.prototype={}
A.aLd.prototype={
Vh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(d.length===0)return D.yv
u=new A.zx(d,x.y)
t=this.a
if(t.aF(0,u)){t=t.h(0,u)
s=t.a
r=t.b
q=t.c
t=t.d
return new A.zs(s,r,q,t,!0)}w=null
try{w=C.b.qs(d,new A.aLe())}catch(p){return D.yv}v=null
try{v=C.b.qs(w.a,new A.aLf())}catch(p){return D.yv}o=v.a
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
if(f<m)m=f}e=new A.zs(o,n,m,l,!1)
t.m(0,u,e)
return e}}
A.zs.prototype={
gbE(){var w=this
return[w.a,w.b,w.c,w.d,w.e]}}
A.an0.prototype={}
A.aLg.prototype={
ig(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=a4.a,a1=a0.ch
if(a1.length===0)return
w=a0.Q
if(w.gaco(0)){v=a3.b
u=v.a
v=v.b
$.ao()
a3.a.jy(new B.I(0,-40,0+(u+40),-40+(v+40)),B.aZ())
a3.aQD(new B.I(0,0,u,v))}d.a0C(a2,a3,a4)
for(v=a0.CW,u=v.length,t=0;t<v.length;v.length===u||(0,B.G)(v),++t)d.aTt(a3,a0,v[t],a4)
s=B.b([],x.bC)
for(v=a0.cx,u=v.f,r=0;r<a1.length;++r){q=a1[r]
d.aTp(a3,q,a4)
d.aTu(a3,q,a4)
d.amP(a2,a3,a4)
p=q.cx
o=u.$2(q,p)
n=J.V(o)
if(n.gp(o)!==p.length)throw B.e(B.e7("indicatorsData and touchedSpotOffsets size should be same"))
for(m=q.a,l=0;l<p.length;++l){k=n.h(o,l)
j=p[l]
if(j<0||j>=m.length)continue
i=m[j]
if(k==null)continue
s.push(new A.vt(q,i,j,k))}}d.aTB(a3,s,a4)
if(w.gaco(0))a3.a.a.restore()
for(a1=a0.cy,v=v.e,w=x.Z,r=0;r<a1.length;++r){h=a1[r].a
if(h.length===0)continue
g=B.Q(h,w)
f=g[0]
for(u=g.length,t=0;t<u;++t){e=g[t]
if(e.b>f.b)f=e}d.aTz(a2,a3,v,f,new A.GJ(g),a4)}},
aTp(d,e,f){var w,v,u,t,s,r,q,p=this,o=d.b,n=A.bym(e.a)
for(w=n.length,v=0;v<n.length;n.length===w||(0,B.G)(n),++v){u=n[v]
t=p.a_4(o,e,u,f)
s=p.aki(o,e,t,u,f)
r=p.a_6(o,e,t,u,f,!0)
q=p.akh(o,e,t,u,f)
p.aTs(d,s,p.a_3(o,e,t,u,f,!0),f,e)
p.aTm(d,q,r,f,e)
p.aTq(d,t,e)
p.aTo(d,t,e,f)}},
aTt(a9,b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a9.b,a4=b0.ch,a5=a4[b1.a],a6=a4[b1.b],a7=A.bym(a5.a),a8=A.bym(a6.a)
if(a7.length!==a8.length)throw B.e(B.bG("Cannot draw betWeenBarsArea when null spots are inconsistent.",null))
for(a4=a9.a.a,w=b1.c,v=b1.d,u=$.bT.a,t=0+a3.a,s=0+a3.b,r=w==null,q=v!=null,p=0;p<a7.length;++p){o=a7[p]
n=a8[p]
m=B.aa(n).i("cE<1>")
l=B.Q(new B.cE(n,m),m.i("ax.E"))
k=a2.a_4(a3,a5,o,b2)
j=a2.a_5(a3,a6.aRO(l),l,b2,k)
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
a1=new B.mS(C.dx,C.bd,C.ea,C.ey,C.dW).e2()
n=B.dQ(new B.I(0,0,t,s))
m=$.bT.b
if(m===$.bT)B.U(B.vr(u))
m=m.TileMode.Clamp
a4.saveLayer.apply(a4,[a1,n,null,null,m])
a1.delete()
a1=a2.r.e2()
n=j.e
a4.drawPath((n==null?j.e=new B.mT(j.gjC().a.snapshot()):n).a,a1)
a1.delete()
a4.restore()}},
aTu(d,e,f){var w,v,u,t,s,r,q,p,o,n=e.CW
if(!n.a||e.a.length===0)return
w=d.b
v=this.a_a(e,w,f)
for(u=e.a,t=n.b,n=n.c,s=d.a,r=0;r<u.length;++r){q=u[r]
if(!q.k(0,D.fS)&&t.$2(q,e)){p=this.fh(q.a,w,f)
o=this.dI(q.b,w,f)
n.$4(q,p/v*100,e,r).aez(s,q,new B.r(p,o))}}},
aTB(b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this
if(b3.length===0)return
w=b2.b
C.b.fU(b3,new A.aLj())
for(v=b3.length,u=b4.a,t=b2.a,s=u.y,r=u.x,q=u.cx,p=q.y,q=q.z,o=0;o<b3.length;b3.length===v||(0,B.G)(b3),++o){n=b3[o]
m=n.a
l=b1.a_a(m,w,b4)
k=n.d
j=n.c
i=n.e
h=b1.fh(j.a,w,b4)
g=b1.dI(j.b,w,b4)
f=i.b
e=f.a
d=B.ct()
if(e){f=d.b=f.c.$4(j,h/l*100,m,k)
if(f===d)B.U(B.rH(d.a))
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
f.r=B.aD(0,a4.v()>>>16&255,a4.v()>>>8&255,a4.v()&255).gq(0)}b2.E_(a3,a5,b1.y,a9.d)
if(e){f=d.b
if(f===d)B.U(B.rH(d.a))
f.aez(t,j,new B.r(h,g))}}},
a_5(d,e,f,g,h){var w=this.akj(d,e,f,g,h)
return w},
a_4(d,e,f,g){return this.a_5(d,e,f,g,null)},
akj(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=a5==null,g=h?new B.cl($.ao().r,C.af,null,null,B.b([],x.v)):a5,f=J.V(a3),e=f.gp(a3),d=i.fh(f.h(a3,0).a,a1,a4),a0=i.dI(f.h(a3,0).b,a1,a4)
if(h){g.ar(new B.fi(d,a0))
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
s=new B.M5(p+u.a,q+u.b,s-n,r-l,s,r)
h.push(s)
r=g.f
if(r!=null)s.iH(r)
s=g.e
if(s!=null)s.a.delete()
g.e=null}return g},
a_6(d,e,f,g,h,i){var w=this,v=B.MZ(f),u=J.V(g),t=w.fh(u.h(g,u.gp(g)-1).a,d,h),s=d.b
v.ar(new B.ca(t,s))
t=w.fh(u.h(g,0).a,d,h)
v.ar(new B.ca(t,s))
v.ar(new B.ca(w.fh(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.ar(new B.o8())
return v},
aki(d,e,f,g,h){return this.a_6(d,e,f,g,h,!1)},
a_3(d,e,f,g,h,i){var w=this,v=B.MZ(f),u=J.V(g),t=w.fh(u.h(g,u.gp(g)-1).a,d,h)
v.ar(new B.ca(t,0))
t=w.fh(u.h(g,0).a,d,h)
v.ar(new B.ca(t,0))
v.ar(new B.ca(w.fh(u.h(g,0).a,d,h),w.dI(u.h(g,0).b,d,h)))
v.ar(new B.o8())
return v},
akh(d,e,f,g,h){return this.a_3(d,e,f,g,h,!1)},
aTs(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ay
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
A.bza(s,q.b,q.c,new B.I(v,u,t,w.b))
d.a.hN(e,r.r)},
aTm(d,e,f,g,h){var w,v,u,t,s,r=this,q=h.ch
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
A.bza(s,q.b,q.c,new B.I(v,0,u,t))
d.a.hN(e,r.r)},
aTq(d,e,f){var w=f.db,v=w.a,u=v.v()
if((u>>>24&255)/255===0)return
if(!new B.N0(B.MZ(e),!1,B.b([],x.I)).t())return
u=this.f
u===$&&B.a()
u.d=f.at?C.ke:C.ea
u.e=C.ey
u.r=v.gq(0)
u.sf0(null)
u.c=f.x
u.r=v.gq(0)
$.lH()
u.z=new B.zD(C.aK,w.c*0.57735+0.5)
d.a.hN(A.aBw(e,f.cy).e8(w.b),this.f)},
aTo(d,e,f,g){var w,v,u,t,s=this,r=d.b,q=s.f
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
A.bza(t,f.r,f.w,new B.I(q,w,v,u))
t.z=null
t.c=f.x
A.bXn(t)
d.a.hN(A.aBw(e,f.cy),s.f)},
aTz(b4,b5,b6,b7,b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=b5.b,b0=B.b([],x.eg),b1=b8.a,b2=A.bMh(b1),b3=J.V(b2)
if(b3.gp(b2)!==b1.length)throw B.e(B.e7("tooltipItems and touchedSpots size should be same"))
for(w=b9.c,v=0;v<b1.length;++v){u=b3.h(b2,v)
if(u==null)continue
t=$.lH().a_C(b4,u.b)
s=u.a
r=w.k(0,C.j_)?new B.jQ(1):w
q=new B.qr(new B.hE(s,a8,a8,C.bl,a8,a8,a8,a8,a8,a8,t),C.cF,C.w,r,a8,a8,a8,a8,C.bj,a8)
q.ah_(120)
b0.push(q)}b3=b0.length
if(b3===0)return
for(p=0,o=0,n=0;w=b0.length,n<w;b0.length===b3||(0,B.G)(b0),++n){w=b0[n].b
m=w.c
if(m>p)p=m
w=w.a.c
o+=w.gbT(w)}b3=a7.fh(b7.a,a9,b9)
t=a7.dI(b7.b,a9,b9)
l=p+C.hZ.geB()
k=o+(w-1)*4+(C.hZ.gd4(0)+C.hZ.gd7(0))
j=t-k-16
i=a7.a_D(b3,l,D.xO,0)
b3=i+l
w=j+k
h=new B.aX(4,4)
g=B.G4(new B.I(i,j,b3,w),h,h,h,h)
f=b1[0]
for(t=b1.length,n=0;n<t;++n){e=b1[n]
if(e.b>f.b)f=e}b1=a7.z
b1===$&&B.a()
t=A.bMg(f)
b1.r=t.gq(t)
t=b3-i
w-=j
b1=$.lH().L_(new B.J(t,w),0).b
d=new B.r(0,b1)
a0=new B.r(g.a,g.b)
a1=$.lH().L_(new B.J(t,w),0)
if(!C.N.k(0,C.N)){s=a7.Q
s===$&&B.a()
s.r=C.E.gq(0)
s.c=0}b5.Wx(0,new A.aLh(a7,b5,g),a0,d,new B.J(t,w))
for(s=b0.length,r=i+t/2,a2=a1.b,b3-=16,a3=i+16,a4=8,n=0;n<b0.length;b0.length===s||(0,B.G)(b0),++n){q=b0[n]
a5=A.c_4(q.r,q.w)
A:{if(D.Es===a5){a6=a3
break A}if(D.Et===a5){a6=b3-q.b.c
break A}a6=r-q.b.c/2
break A}b5.Wx(0,new A.aLi(b5,q,new B.r(a6,j+a4-a2+b1)),a0,d,new B.J(t,w))
a6=q.b.a.c
a4=a4+a6.gbT(a6)+4}},
a_a(d,e,f){var w,v=d.a
if(v.length===0)return 0
w=this.fh(v[0].a,e,f)
return this.fh(v[v.length-1].a,e,f)-w},
X9(d,e,f){var w,v,u,t=B.b([],x.df)
for(w=f.a.ch,v=0;v<w.length;++v){u=this.akK(e,d,w[v],v,f)
if(u!=null)t.push(u)}C.b.fU(t,new A.aLk())
return t.length===0?null:t},
akK(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=B.b([],x.U)
for(w=f.a,v=w.length,u=h.a.cx,t=u.r,u=u.w,s=null,r=0;r<w.length;w.length===v||(0,B.G)(w),++r){q=w[r]
if(q.k(0,D.fS))continue
p=u.$2(e,new B.r(this.fh(q.a,d,h),this.dI(q.b,d,h)))
if(p<=t){if(s==null)s=p
if(p<s){C.b.hz(o,0,q)
s=p}else o.push(q)}}if(o.length!==0){v=C.b.ga2(o)
s.toString
return new A.qt(s,f,g,C.b.hy(w,v),v.a,v.b)}else return null}}
A.vt.prototype={}
A.a7v.prototype={
bj(d){var w,v=this.e,u=B.bD(d,null,x.w).w.gcQ(),t=new A.aLg()
t.a1R()
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
w.a=D.a0n
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
t=new A.abJ(this.d,v,u,t,d,C.bl,new B.bs(),B.aJ(x.g))
t.bf()
t.Zt(v.cx)
t.aga()
return t},
by(d,e){e.siq(0,this.d)
e.sZd(this.e)
e.scQ(B.bD(d,null,x.w).w.gcQ())
e.B=d
e.bb()}}
A.abJ.prototype={
siq(d,e){if(this.aB.k(0,e))return
this.aB=e
this.bb()},
sZd(d){var w=this
if(w.i7.k(0,d))return
w.i7=d
w.a1l(d.cx)
w.bb()},
scQ(d){if(this.cY.k(0,d))return
this.cY=d
this.bb()},
aO(d,e){var w,v,u=this,t=d.gdz(0),s=t.a
J.bc(s.save())
s.translate(e.a,e.b)
w=u.B
v=u.gC(0)
u.fO.ig(w,new A.a1O(t,v),new A.vI(u.aB,u.i7,u.cY,x.o))
s.restore()},
a_v(d){var w=this,v=w.gC(0)
return new A.OG(w.fO.X9(d,v,new A.vI(w.aB,w.i7,w.cY,x.o)))}}
A.NI.prototype={
L(){return"HorizontalAlignment."+this.b}}
A.a1O.prototype={
aQD(d){this.a.a.clipRect(B.dQ(d),$.nU()[1],!0)
return null},
aeH(d,e){d.aO(this.a,e)},
Wx(d,e,f,g,h){var w,v,u,t,s=this.a,r=s.a
J.bc(r.save())
w=f.a
v=h.a/2
u=f.b
t=h.b/2
r.translate(g.a+w+v,g.b+u+t)
$.lH()
s.Zb(0,d*0.017453292519943295)
r.translate(-w-v,-u-t)
e.$0()
r.restore()},
E_(d,e,f,g){var w=new B.cl($.ao().r,C.af,null,null,B.b([],x.v))
w.ar(new B.fi(d.a,d.b))
w.ar(new B.ca(e.a,e.b))
this.a.hN(A.aBw(w,g),f)}}
A.zx.prototype={
gbE(){return[this.a]}}
A.anb.prototype={}
A.a1Z.prototype={}
A.b2N.prototype={
L_(d,e){var w=d.a,v=e*0.017453292519943295,u=Math.sin(v),t=d.b,s=Math.cos(v)
return new B.r((w-(Math.abs(w*Math.cos(v))+Math.abs(t*Math.sin(v))))/2,(t-(Math.abs(w*u)+Math.abs(t*s)))/2)},
aYC(d,e){var w,v,u,t,s
if(d==null)return null
w=d.a
v=e/2
if(w.a>v||w.b>v)w=new B.aX(v,v)
u=d.b
if(u.a>v||u.b>v)u=new B.aX(v,v)
t=d.c
if(t.a>v||t.b>v)t=new B.aX(v,v)
s=d.d
return new B.d9(w,u,t,s.a>v||s.b>v?new B.aX(v,v):s)},
aYD(d,e){var w,v
if(d==null)return D.a0y
w=d.b
v=e/2
return d.aRR(w>v?v:w)},
P7(d,e){var w,v=Math.max(C.d.cG(d,40),1)
if(e===0)return 1
w=e/v
if(v<=2)return w
return this.b0O(w)},
b0O(d){if(d<1)return this.aKD(d)
return this.a8W(d)},
aKD(d){var w,v,u,t,s,r,q
if(d<0.000001)return d
w=C.d.j(d)
v=w.length
u=v-2
for(t=0,s=2;s<=v;++s){if(w[s]!=="0")break;++t}r=u-t
if(r>2)u-=r-2
q=Math.pow(10,u)
return this.a8W(d*q)/q},
a8W(d){var w,v=C.e.j(C.d.a0(d)).length-1
d/=Math.pow(10,v)
w=d>=10?C.d.aP(d)/10:d
if(w>=7.6)return 10*C.d.a0(Math.pow(10,v))
else if(w>=2.6)return 5*C.d.a0(Math.pow(10,v))
else if(w>=1.6)return 2*C.d.a0(Math.pow(10,v))
else return C.d.a0(Math.pow(10,v))},
akz(d){if(d>=1)return 1
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
a_C(d,e){var w,v,u=d.O(x.f0)
if(u==null)u=C.j6
w=e.a?u.w.c4(e):e
v=B.bN(d,C.vu)
v=v==null?null:v.ay
return v===!0?w.c4(C.mp):w},
akr(d,e,f,g){var w=C.d.ah(g-d,f)
if(Math.abs(e-d)<=w)return d
if(w===0)return d
return d+w}}
var z=a.updateTypes(["F(qv)","A(eD)","~(v,fO)","F(ee,v)","R<~>()","F(F,qv)","bQ(F,tC)","pM(F)","v(qt,qt)","Iw(ok)","Ic(C,bK)","Ju(ol)","vx(@)","wu(@)","ee(F)","D1(@)","ab(F,tC)","uX(dd<uX>)","Et(dd<aFP>)","F(vx)","F(wu)","wP(C,bK)","Bu(y)","~()","qv(@)","~(hs,L4?)","xL(@)","F(iv)","A(fO)","~(v,iv)","~(@)","jW(o3)","c(o3)","jW(bt<v,F>)","jW(F)","o3(jW)","~(hs,OG?)","ee(ee)","lV(GV<lV>)","zr(@)","R<ol>(cg<ol>)","tD(v)","uY(eD,F,ee,v)","rI(nd)","A(ee)","v(vt,vt)","F(fO)","R<ok>(cg<ok>)","v(v,v,F)","fO(fO,fO,F)","iv(iv,iv,F)","mO(mO,mO,F)","Dk?(fO,v,iv,v)","E(fO)","c(F,tC)","eD(eD,eD,F)","A(F)","n7(n7,n7,F)","nC(nC,nC,F)","kW(kW,kW,F)","ln(ln,ln,F)","f(kW)","f(ln)","ee(ee,ee,F)","mP(mP,mP,F)","uY(eD,F,ee,v{size:F?})","A(eD,ee)","F(r,r)","u<tD>(ee,u<v>)","yd(y)","u<rI>(u<nd>)","E(nd)","yC(f5<C?>)"])
A.aFL.prototype={
$1(d){var w=B.di(x.f.a(d),x.N,x.z),v=w.h(0,"month")
return new A.qv(J.am(v==null?"":v),A.pd(w.h(0,"revenue_net")),A.pd(w.h(0,"expense_net")),A.pd(w.h(0,"result_net")))},
$S:z+24}
A.aFM.prototype={
$1(d){var w,v,u,t=B.di(x.f.a(d),x.N,x.z),s=B.ak(t.h(0,"machine_id")),r=t.h(0,"label")
r=J.am(r==null?"unbekannt":r)
w=B.ak(t.h(0,"code"))
v=A.pd(t.h(0,"gross"))
u=B.b4(t.h(0,"purchases_count"))
u=u==null?null:C.d.a0(u)
if(u==null)u=0
return new A.vx(s,r,w,v,u,A.pd(t.h(0,"avg_basket")))},
$S:z+12}
A.aFN.prototype={
$1(d){var w,v=B.di(x.f.a(d),x.N,x.z),u=B.ak(v.h(0,"product_id")),t=v.h(0,"name")
t=J.am(t==null?"unbekannt":t)
w=B.b4(v.h(0,"quantity"))
w=w==null?null:C.d.a0(w)
if(w==null)w=0
return new A.wu(u,t,w,A.pd(v.h(0,"gross")))},
$S:z+13}
A.aG3.prototype={
$1(d){var w,v,u,t
x.c.a(d)
w=J.V(d)
v=w.h(d,"code")
v=J.am(v==null?"":v)
u=w.h(d,"name")
u=J.am(u==null?"":u)
t=w.h(d,"direction")
return new A.D1(v,u,J.am(t==null?"expense":t),A.uj(w.h(d,"net")),A.uj(w.h(d,"tax")),A.uj(w.h(d,"gross")))},
$S:z+15}
A.bua.prototype={
$1(d){return new A.uX(d.an($.bH(),x.A))},
$S:z+17}
A.bub.prototype={
$1(d){return new A.Et(d.an($.bQZ(),x.D))},
$S:z+18}
A.bw3.prototype={
$1(d){return E.aFO()},
$S:z+38}
A.buc.prototype={
$1(d){var w=d.an($.xv(),x.P)
return d.an($.awn(),x.a).Gn(w)},
$S:z+40}
A.bu9.prototype={
$1(d){var w=d.an($.xv(),x.P)
return d.an($.awn(),x.a).Gi(w)},
$S:z+47}
A.bu8.prototype={
$1(d){return this.ak6(d)},
ak6(d){var w=0,v=B.q(x.h),u,t,s,r,q
var $async$$1=B.m(function(e,f){if(e===1)return B.n(f,v)
for(;;)switch(w){case 0:t=x.z
r=B
q=x.f
w=3
return B.j(d.an($.bH(),x.A).h4("finance_balance_kpis",t),$async$$1)
case 3:s=r.di(q.a(f),x.N,t)
if(!J.d(s.h(0,"has_data"),!0)){u=null
w=1
break}u=s
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$1,v)},
$S:214}
A.aFK.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aD(0,$.awn(),x.a).pO(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFJ.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.j(u.b.r.aD(0,$.awn(),x.a).M3(u.c),$async$$0)
case 2:t.a=e
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.aG1.prototype={
$0(){var w=0,v=B.q(x.H),u,t=this,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=t.a
r=$.bx3()
if(s.e==null)B.U(B.Z(y.b))
s.gcv().cs(r)
u=null
w=1
break
case 1:return B.o(u,v)}})
return B.p($async$$0,v)},
$S:2}
A.aFU.prototype={
$0(){return this.a.JX(this.b,this.c)},
$S:0}
A.aFV.prototype={
$0(){return this.a.BJ(this.b,this.c)},
$S:0}
A.aFW.prototype={
$0(){var w=x.z
return B.b6(this.a,!1).es(B.eH(new A.aFT(),null,w),w)},
$S:0}
A.aFT.prototype={
$1(d){return F.Dl},
$S:z+69}
A.aFX.prototype={
$0(){return B.oq(this.a,"/finance/approvals",x.cK)},
$S:0}
A.aFY.prototype={
$0(){var w=this
return w.a.BK(w.b,w.c,w.d)},
$S:0}
A.aG0.prototype={
$0(){return F.TA},
$S:124}
A.aG_.prototype={
$2(d,e){return new A.Ic(B.i(d),null)},
$S:z+10}
A.aFZ.prototype={
$1(d){return new A.Ju(d,null)},
$S:z+11}
A.aFS.prototype={
$1(d){var w=null,v=this.a,u=$.dp()
v=B.k("Die Finanzauswertung f\xfcr "+u.am(v.a)+" \u2013 "+u.am(v.b)+" wird beiden Gesellschaftern zur Pr\xfcfung vorgelegt. Nach 2-of-2-Freigabe wird die signierte PDF-Fassung automatisch abgelegt.",w,w,w,w,w,w,w)
u=this.b
return B.iu(B.b([B.d7(C.bZ,w,w,new A.aFQ(u),w,w),B.dl(F.mq,new A.aFR(u),B.dK(C.m,C.A,w,w,w,w,w))],x.p),w,v,F.mr)},
$S:44}
A.aFQ.prototype={
$0(){B.b6(this.a,!1).cE(!1)
return null},
$S:0}
A.aFR.prototype={
$0(){B.b6(this.a,!1).cE(!0)
return null},
$S:0}
A.bjl.prototype={
$0(){var w=this.a.aD(0,$.xv().ghC(),x.V),v=E.aFO()
w.us(0,v)
return v},
$S:0}
A.bjm.prototype={
$0(){var w=this.a.aD(0,$.xv().ghC(),x.V),v=new B.b_(Date.now(),0,!1),u=new E.lV(B.bB(B.aW(v),1,1,0,0,0,0),v)
w.us(0,u)
return u},
$S:0}
A.bjn.prototype={
$0(){return this.a.Ji(this.b,this.c)},
$S:0}
A.bjk.prototype={
$2(d,e){return new B.oU(B.W(d).aRc(B.W(d).ax.aS6(C.j,C.m)),e,null)},
$S:1025}
A.bpj.prototype={
$2(d,e){var w=null,v=e.b<380?1:2,u=this.a.c,t=$.d3(),s=A.Os(!1,C.o1,"Umsatz 7 %",t.am(u.a),w),r=A.Os(!1,C.o1,"Umsatz 19 %",t.am(u.b),w),q=A.Os(!0,D.aaC,"Umsatz netto",t.am(u.c),w),p=A.Os(!1,D.aaB,"Aufwand",t.am(u.d),w),o=u.e,n=t.am(o)
return B.a6i(1.7,B.b([s,r,q,p,A.Os(!0,C.y2,"Ergebnis",n,o<0?C.an:C.aE),A.Os(!1,C.fv,"USt-Saldo",t.am(u.f-u.r),w)],x.p),v,12,12,C.jX,!0)},
$S:104}
A.aL0.prototype={
$0(){return D.auq},
$S:124}
A.aL_.prototype={
$2(d,e){var w=null
return B.by(C.an,B.k("KPIs konnten nicht geladen werden: "+B.i(d),w,w,w,B.D(C.j,13,C.l),w,w,w),C.eJ,w,C.C,w,3)},
$S:221}
A.aKZ.prototype={
$1(d){return new A.Iw(d,null)},
$S:z+9}
A.bgv.prototype={
$2(a0,a1){var w,v,u,t,s,r=this,q=null,p=a1.b<480,o=p?2:3,n=p?1.05:1.1,m=r.a,l=m.c,k=l.a,j=$.d3(),i=j.am(k.c),h=l.w,g=l.d,f=B.aa(g).i("ae<1,F>"),e=f.i("ax.E"),d=B.Q(new B.ae(g,new A.bgk(),f),e)
i=A.jP(h.f,h.e,!1,"Umsatz (netto)",!1,q,q,q,q,d,i)
d=j.am(r.b)
w=B.Q(new B.ae(g,new A.bgl(),f),e)
d=A.jP(q,q,!1,"\xd8 Umsatz / Tag",!1,"Zielband: 15 \u2013 50 \u20ac/Tag \xb7 Automat","15 \u2013 50 \u20ac",15,50,w,d)
k=j.am(k.e)
w=B.Q(new B.ae(g,new A.bgm(),f),e)
k=A.jP(h.w,h.r,!0,"Ergebnis (netto)",!1,q,q,q,q,w,k)
w=C.d.ae(h.b,1)
v=B.Q(new B.ae(g,new A.bgn(),f),e)
w=A.jP(q,q,!1,"Umsatz\xadrendite",!1,"Ergebnis / Umsatz \xb7 Ziel 25 \u2013 35 %","25 \u2013 35 %",25,35,v,w+" %")
v=C.d.ae(h.a,1)
u=B.Q(new B.ae(g,new A.bgo(),f),e)
v=A.jP(q,q,!1,"Rohertrags\xadmarge",!1,"(Umsatz \u2013 Wareneinsatz) / Umsatz \xb7 Ziel 50 \u2013 70 %","50 \u2013 70 %",50,70,u,v+" %")
u=C.d.ae(r.c,1)
t=B.Q(new B.ae(g,new A.bgp(),f),e)
u=A.jP(q,q,!1,"Waren\xadeinsatz\xadquote",!0,"Wareneinsatz / Umsatz \xb7 Ziel 30 \u2013 40 %","30 \u2013 40 %",30,40,t,u+" %")
t=C.d.ae(h.c,1)
s=B.Q(new B.ae(g,new A.bgq(),f),e)
t=A.jP(q,q,!1,"EBITDA-Marge",!1,"ohne AfA/Zinsen/Steuern *",q,q,q,s,t+" %")
h=j.am(h.d)
s=B.Q(new B.ae(g,new A.bgr(),f),e)
h=A.jP(q,q,!1,"Operativer Cashflow",!1,"Einzahlungen \u2013 Auszahlungen (brutto)",q,q,q,s,h)
l=j.am(l.r.d)
m=B.Q(new B.ae(g,new A.bgs(m),f),e)
m=A.jP(q,q,!1,"\xd8 Warenkorb",!1,"App-K\xe4ufe \xb7 Zielband 1 \u2013 3 \u20ac","1 \u2013 3 \u20ac",1,3,m,l)
l=r.d
j=j.am(l)
l=B.Q(new B.ae(g,new A.bgt(l),f),e)
l=A.jP(q,q,!1,"Umsatz je Kunde",!1,"App-Umsatz / aktive Kunden im Zeitraum",q,q,q,l,j)
j=r.e
s=C.d.ae(j,1)
j=B.Q(new B.ae(g,new A.bgu(j),f),e)
return B.a6i(n,B.b([i,d,k,w,v,u,t,h,m,l,A.jP(q,q,!1,"\xd8 Verk\xe4ufe / Tag",!1,"App-K\xe4ufe \xb7 Zielband 10 \u2013 50/Tag \xb7 Automat","10 \u2013 50",10,50,j,s)],x.p),o,12,12,C.jX,!0)},
$S:104}
A.bgk.prototype={
$1(d){return d.b},
$S:z+0}
A.bgl.prototype={
$1(d){return d.b/30},
$S:z+0}
A.bgm.prototype={
$1(d){return d.d},
$S:z+0}
A.bgn.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgo.prototype={
$1(d){var w=d.b
return w>0?(w-d.c)/w*100:0},
$S:z+0}
A.bgp.prototype={
$1(d){var w=d.b
return w>0?d.c/w*100:0},
$S:z+0}
A.bgq.prototype={
$1(d){var w=d.b
return w>0?d.d/w*100:0},
$S:z+0}
A.bgr.prototype={
$1(d){return d.d},
$S:z+0}
A.bgs.prototype={
$1(d){return this.a.c.r.d},
$S:z+0}
A.bgt.prototype={
$1(d){return this.a},
$S:z+0}
A.bgu.prototype={
$1(d){return this.a},
$S:z+0}
A.bgw.prototype={
$0(){return A.bBd(this.b,1.45,new A.Uc(this.a.c,1/0,null),"Umsatz (gold) und Aufwand (schwarz) je Monat","Cashflow-Entwicklung")},
$S:0}
A.bgx.prototype={
$0(){return A.bBd(this.b,1.6,new A.Un(this.a.c,1/0,!0,null),"Umsatz (gold) und Ergebnis (gr\xfcn)","Aktueller vs. Vergleichszeitraum")},
$S:0}
A.bth.prototype={
$1(d){var w=this,v=null,u=B.aR(16),t=x.p,s=B.b([B.ap(B.b([B.az(B.k(w.a,v,v,v,B.c8(C.j,18,C.q),v,v,v),1),B.fg(v,v,D.adl,v,v,new A.btg(d),v,v,v,"Schlie\xdfen",v)],t),C.k,v,C.f,C.h,0,v,v)],t)
C.b.K(s,B.b([B.k(w.b,v,v,v,B.D(C.p,12,C.aI),v,v,v),C.M],t))
s.push(C.u)
s.push(B.ch(new B.mN(w.c,w.d,v),v,17976931348623157e292))
return B.a4T(v,C.A,new B.ai(C.ai,B.ad(s,C.D,v,C.f,C.H,0),v),v,v,v,C.fu,C.uU,v,new B.de(u,C.N),v)},
$S:1026}
A.btg.prototype={
$0(){return B.b6(this.a,!1).fg()},
$S:0}
A.bgy.prototype={
$0(){var w=this.a,v=B.ay(w.c,"\xad",""),u=B.b([w.d],x.s),t=w.e
if(t!=null)u.push(t)
A.bBd(this.b,2.4,new A.Yz(w.w,w.y,w.z,null),C.b.cj(u," \xb7 "),v)
return null},
$S:0}
A.boQ.prototype={
$2(d,e){return d<e?d:e},
$S:46}
A.boR.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.boS.prototype={
$1(d){return A.aLb(null,1.4,null,C.an,0.35,D.ahf,D.Ei,null,!1,!1,!1,!1,D.FM,!1,10,D.YB,!0,C.lz,B.b([new A.eD(0,d),new A.eD(this.a,d)],x.U))},
$S:z+14}
A.b6w.prototype={
$2(d,e){var w=e.b,v=e.c,u=w>v?w:v
return u>d?u:d},
$S:z+5}
A.b6y.prototype={
$2(d,e){var w=null
return B.k(this.a.aLY(d),w,w,w,B.D(C.p,10,C.S),w,w,w)},
$S:z+16}
A.b6z.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=this.a.length)return C.Am
return new B.ai(C.hY,B.k(C.c.cR(this.a[v].a,5),w,w,w,B.D(C.p,9,C.S),w,w,w),w)},
$S:z+6}
A.b6x.prototype={
$1(d){return D.a97},
$S:z+7}
A.b7m.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7n.prototype={
$1(d){return Math.abs(d)},
$S:1}
A.b7o.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b7p.prototype={
$2(d,e){var w=null,v=C.d.a0(d)
if(v<0||v>=3)return C.Am
return new B.ai(C.hY,B.k(this.a[v],w,w,w,B.D(C.j,12,C.q),w,w,w),w)},
$S:z+6}
A.bh2.prototype={
$1(d){return d.d},
$S:z+19}
A.bh3.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.bqA.prototype={
$1(d){return d.d},
$S:z+20}
A.bqB.prototype={
$2(d,e){return d>e?d:e},
$S:46}
A.b52.prototype={
$0(){return D.aux},
$S:124}
A.b51.prototype={
$2(d,e){return new A.wP("Bilanzdaten nicht verf\xfcgbar: "+B.i(d),null)},
$S:z+21}
A.b50.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(d==null){w=n.b
v=n.c
u=x.p
return B.by(m,B.ad(B.b([B.k("Noch keine Bilanzdaten erfasst.",m,m,m,B.D(C.j,14,C.S),m,m,m),C.M,B.k("Liquidit\xe4t 1\u20133, EK-Quote und ROI erscheinen hier, sobald ein Bilanz-Stichtag erfasst ist. Sp\xe4ter \xfcbernimmt der sevDesk-Sync die Werte automatisch.",m,m,m,B.D(C.p,12.5,C.l),m,m,m),C.u,B.lo(C.cx,B.b([B.fV(C.Ff,D.aIQ,new A.b4V(w,v),m),B.fV(D.ack,D.aHE,new A.b4W(w,v),m)],u),C.dI,8,8)],u),C.D,m,C.f,C.h,0),C.ae,m,C.C,m,3)}w=new A.b53(d)
t=C.b.fn(n.a.e.d,0,new A.b4X())
s=w.$1("equity")
if(s==null)s=0
r=s>0?t/s*100:m
w=B.ia(new A.b4Y(new A.b54(w),r,w,s))
v=J.V(d)
u=B.i(v.h(d,"as_of"))
v=J.d(v.h(d,"source"),"sevdesk")?"sevDesk-Sync":"manuell erfasst"
q=n.b
p=n.c
o=x.p
return B.ad(B.b([w,C.M,B.ap(B.b([B.az(B.k("Stand: "+u+" \xb7 Quelle: "+v,m,m,m,B.D(C.p,11,C.l),m,m,m),1),B.nw(D.adA,D.aI1,new A.b4Z(q,p),m),B.nw(D.ada,D.aHN,new A.b5_(q,p,d),m)],o),C.k,m,C.f,C.h,0,m,m)],o),C.a8,m,C.f,C.h,0)},
$S:219}
A.b4V.prototype={
$0(){return A.avL(this.a,this.b,null)},
$S:0}
A.b4W.prototype={
$0(){return A.avI(this.a,this.b)},
$S:0}
A.b53.prototype={
$1(d){var w=B.b4(J.a_(this.a,d))
return w==null?null:w},
$S:1027}
A.b54.prototype={
$1(d){var w,v=this.a.$1(d)
if(v==null)w="\u2014"
else{w=C.d.ae(v,1)
w=B.ay(w,".",",")+" %"}return w},
$S:34}
A.b4X.prototype={
$2(d,e){return d+e.d},
$S:z+5}
A.b4Y.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=e.b<480,q=r?2:3,p=r?1.35:1.4,o=t.a,n=A.jP(s,s,!1,"Liquidit\xe4t 1. Grades",!1,"Fl\xfcssige Mittel / kurzfr. Verb. \xb7 Ziel >= 20 %",">= 20 %",s,s,C.ib,o.$1("liquidity1_pct")),m=A.jP(s,s,!1,"Liquidit\xe4t 2. Grades",!1,"+ Forderungen \xb7 Ziel >= 100 %",">= 100 %",s,s,C.ib,o.$1("liquidity2_pct")),l=A.jP(s,s,!1,"Liquidit\xe4t 3. Grades",!1,"Umlaufverm\xf6gen / kurzfr. Verb. \xb7 Ziel >= 120 %",">= 120 %",s,s,C.ib,o.$1("liquidity3_pct"))
o=A.jP(s,s,!1,"EK-Quote",!1,"Eigenkapital / Bilanzsumme \xb7 Ziel >= 30 %",">= 30 %",s,s,C.ib,o.$1("equity_ratio_pct"))
w=t.b
if(w==null)w="\u2014"
else{w=C.d.ae(w,1)
w=B.ay(w,".",",")+" %"}w=A.jP(s,s,!1,"ROI (12 Monate)",!1,"Ergebnis 12 M / Eigenkapital",s,s,s,C.ib,w)
v=t.c.$1("total_assets")
if(v==null)v=0
u=$.d3()
v=u.am(v)
return B.a6i(p,B.b([n,m,l,o,w,A.jP(s,s,!1,"Bilanzsumme",!1,"EK "+u.am(t.d),s,s,s,C.ib,v)],x.p),q,12,12,C.jX,!0)},
$S:104}
A.b4Z.prototype={
$0(){return A.avI(this.a,this.b)},
$S:0}
A.b5_.prototype={
$0(){return A.avL(this.a,this.b,this.c)},
$S:0}
A.btf.prototype={
$1(d){return new A.Bu(this.a,new A.bte(this.b),this.c,null)},
$S:z+22}
A.bte.prototype={
$0(){var w=this.a,v=$.bx2()
if(w.e==null)B.U(B.Z(y.b))
w.gcv().cs(v)},
$S:0}
A.b4P.prototype={
$0(){},
$S:0}
A.b4Q.prototype={
$0(){return this.a.f=!0},
$S:0}
A.b4R.prototype={
$0(){return this.a.f=!1},
$S:0}
A.b4T.prototype={
$0(){var w=0,v=B.q(x.H),u=this,t,s,r
var $async$$0=B.m(function(d,e){if(d===1)return B.n(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.d
r===$&&B.a()
w=2
return B.j(B.pf(u.b,B.bB(2024,1,1,0,0,0,0),null,r,new B.b_(Date.now(),0,!1),null),$async$$0)
case 2:t=e
if(t!=null)s.J(new A.b4S(s,t))
return B.o(null,v)}})
return B.p($async$$0,v)},
$S:2}
A.b4S.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.b4U.prototype={
$0(){return B.b6(this.a,!1).fg()},
$S:0}
A.b55.prototype={
$0(){var w=this.b.a,v=w.d,u=w.f,t=this.a.cy
t.a8(0)
t.m(0,v,B.b([u],x.t))},
$S:0}
A.b56.prototype={
$1(d){return new A.xL(x.B.a(d),this.a.a.r)},
$S:z+26}
A.ayr.prototype={
$1(d){return d.e},
$S:z+27}
A.ays.prototype={
$2(d,e){return d+e},
$S:46}
A.ayu.prototype={
$1(d){return d.c.length!==0},
$S:z+28}
A.ayw.prototype={
$2(d,e){var w=this,v=e.e,u=w.d,t=w.a
w.b.push(w.c-u.gdt(0)/2+t.a+v/2)
t.a=t.a+(v+u.d)},
$S:z+29}
A.ayx.prototype={
$0(){var w,v=this,u=v.b,t=v.c,s=v.a,r=s.w
r===$&&B.a()
w=u.a
w.eV(t,r)
s=s.x
s===$&&B.a()
w.eV(t,s)
u.aeH(v.d,v.e)},
$S:0}
A.ay9.prototype={
$1(d){return 0},
$S:1028}
A.ay8.prototype={
$2(d,e){return B.fF(C.c1,this.a.amv(e),C.n,C.bK,null)},
$S:1029}
A.b_h.prototype={
$1(d){return d.a},
$S:z+31}
A.b_i.prototype={
$1(d){return d.b},
$S:z+32}
A.b_j.prototype={
$1(d){return new A.jW(this.a.ch[d.a].a,d.b)},
$S:z+33}
A.b_k.prototype={
$1(d){var w=this,v=w.c,u=w.b-v,t=u>0?(d-v)/u:0
v=w.a.c
if(!(v===D.mJ||v===D.dN))t=1-t
return new A.jW(d,t*w.d)},
$S:z+34}
A.b_l.prototype={
$1(d){var w,v,u,t,s=this,r=s.a,q=r.goO(),p=d.a
r.goO()
r=$.lH()
w=p<0
v=w?Math.abs(p):p
if(v>=1e9){u=C.d.ae(v/1e9,1)
t="B"}else if(v>=1e6){u=C.d.ae(v/1e6,1)
t="M"}else if(v>=1000){u=C.d.ae(v/1000,1)
t="K"}else{u=C.d.ae(v,r.akz(Math.abs(s.b-s.c)))
t=""}if(C.c.hs(u,".0"))u=C.c.a_(u,0,u.length-2)
if(w)u="-"+u
if(u==="-0")u="0"
return new A.o3(d,q.c.b.$2(p,new A.tC(u+t,s.e)))},
$S:z+35}
A.aVt.prototype={
$1(d){this.a.lg(new A.a5I(d))},
$S:141}
A.aVu.prototype={
$1(d){this.a.lg(new A.a5J(d))},
$S:42}
A.aVv.prototype={
$1(d){this.a.lg(new A.a5K(d))},
$S:29}
A.aVw.prototype={
$0(){this.a.lg(D.a23)},
$S:0}
A.aVx.prototype={
$1(d){this.a.lg(new A.Ne())},
$S:47}
A.aVy.prototype={
$1(d){this.a.lg(new A.a5N(d))},
$S:45}
A.aVz.prototype={
$0(){this.a.lg(D.a24)},
$S:0}
A.aVA.prototype={
$1(d){this.a.lg(new A.Nh(d))},
$S:95}
A.aVB.prototype={
$1(d){this.a.lg(new A.a5H(d))},
$S:166}
A.aVC.prototype={
$1(d){this.a.lg(new A.a5G(d))},
$S:167}
A.aVD.prototype={
$1(d){return this.a.lg(new A.Nc(d))},
$S:168}
A.aVE.prototype={
$1(d){return this.a.lg(new A.a5L(d))},
$S:60}
A.aVF.prototype={
$1(d){return this.a.lg(new A.Nf(d))},
$S:59}
A.bgJ.prototype={
$1(d){var w=this.a.db.h(0,C.b.hy(this.b.ch,d))
return d.aRM(w==null?B.b([],x.t):w)},
$S:z+37}
A.bgH.prototype={
$0(){var w=this.a
C.b.a8(w.cy)
w.db.a8(0)},
$S:0}
A.bgI.prototype={
$0(){var w,v,u,t,s,r,q=this.b.a
q.toString
w=B.Q(q,x.dw)
C.b.fU(w,new A.bgG())
v=this.a
u=v.db
u.a8(0)
for(t=x.t,s=0;s<q.length;++s){r=q[s]
u.m(0,r.d,B.b([r.e],t))}q=v.cy
C.b.a8(q)
q.push(new A.GJ(w))},
$S:0}
A.bgG.prototype={
$2(d,e){return C.d.cA(e.b,d.b)},
$S:z+8}
A.bgK.prototype={
$1(d){return new A.zr(x.hf.a(d),this.a.a.r)},
$S:z+39}
A.aLc.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+1}
A.bu_.prototype={
$1(d){var w,v={},u=this.a,t=u.w,s=t==null?null:C.b.ga2(t.a)
if(s==null)s=u.r
t=u.CW.a
w=A.bG5(t?A.bAW(u.a[d],0,u):s,null,null,4)
v.a=10
if(t)v.a=7.2
return new A.tD(w,new A.yE(!0,A.bBO(),new A.btZ(v)))},
$S:z+41}
A.btZ.prototype={
$4(d,e,f,g){var w=this.a.a
return A.bUX(A.bAW(d,e,f),w,A.c2T(d,e,f))},
$S:z+42}
A.btX.prototype={
$1(d){var w,v=null,u=d.c,t=u.w
t=t==null?v:C.b.ga2(t.a)
u=t==null?u.r:t
w=B.jb(v,v,u==null?D.dp:u,v,v,v,v,v,v,v,v,14,v,v,C.S,v,v,!0,v,v,v,v,v,v,v,v)
return new A.rI(C.d.j(d.b),w)},
$S:z+43}
A.aLe.prototype={
$1(d){return d.a.length!==0},
$S:z+44}
A.aLf.prototype={
$1(d){return!d.k(0,D.fS)},
$S:z+1}
A.aLj.prototype={
$2(d,e){return C.d.cA(e.c.b,d.c.b)},
$S:z+45}
A.aLh.prototype={
$0(){var w,v=this.c,u=this.a,t=u.z
t===$&&B.a()
w=this.b.a
w.eV(v,t)
u=u.Q
u===$&&B.a()
w.eV(v,u)},
$S:0}
A.aLi.prototype={
$0(){this.a.aeH(this.b,this.c)},
$S:0}
A.aLk.prototype={
$2(d,e){return C.d.cA(d.w,e.w)},
$S:z+8}
A.ayk.prototype={
$1(d){return d.gdt(0)},
$S:z+46}
A.ayl.prototype={
$2(d,e){return d+e},
$S:46}
A.ayo.prototype={
$0(){var w={},v=this.b.ch,u=v.length
w.a=0
new B.j1(v,B.aa(v).i("j1<1>")).aC(0,new A.ayp(w,this.a/(u+1),this.c))},
$S:0}
A.ayp.prototype={
$2(d,e){var w=this.a,v=w.a+this.b
w.a=v
v=w.a=v+e.gdt(0)/2
this.c[d]=v
w.a=v+e.gdt(0)/2},
$S:z+2}
A.aym.prototype={
$2(d,e){var w=this.a,v=w.a=w.a+e.gdt(0)/2,u=d!==0?w.a=v+this.b:v
this.c[d]=u
w.a=u+e.gdt(0)/2},
$S:z+2}
A.ayn.prototype={
$2(d,e){var w=this.a,v=this.b,u=w.a+v
w.a=u
u=w.a=u+e.gdt(0)/2
this.c[d]=u
u+=e.gdt(0)/2
w.a=u
w.a=u+v},
$S:z+2}
A.aIj.prototype={
$2(d,e){var w=this.b.a.length
C.b.E(this.a.a,1/(w-1)*d)},
$S:1030}
A.aBx.prototype={
$1(d){return d},
$S:1031};(function aliases(){var w=A.KY.prototype
w.a0C=w.ig
w.amP=w.aTv
w.amQ=w.aeA
w=A.TO.prototype
w.apo=w.l
w=A.L7.prototype
w.a0E=w.ig
w=A.Gh.prototype
w.a1l=w.Zt})();(function installTearOffs(){var w=a._static_1,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff,s=a._static_2,r=a._instance_1u
w(A,"c6x","bUU",72)
var q
v(q=A.TQ.prototype,"gaFP","aFQ",23)
v(q,"gaEK","Ix",4)
v(q,"gaFx","IJ",4)
u(A.TR.prototype,"gatj","atk",25)
t(A,"c5l",3,null,["$3"],["bSa"],49,0)
t(A,"c5m",3,null,["$3"],["bSb"],50,0)
t(A,"c5n",3,null,["$3"],["bSc"],51,0)
t(A,"c5p",4,null,["$4"],["c6a"],52,0)
w(A,"c5o","c69",53)
s(A,"bBi","c6b",54)
t(A,"c5g",3,null,["$3"],["bUY"],55,0)
w(A,"a_J","c8D",56)
w(A,"avN","c6e",7)
t(A,"c5i",3,null,["$3"],["bVI"],57,0)
t(A,"c5k",3,null,["$3"],["c_Y"],58,0)
t(A,"c5h",3,null,["$3"],["bVH"],59,0)
t(A,"c5j",3,null,["$3"],["c_X"],60,0)
w(A,"cg2","bVG",61)
w(A,"cg3","c_W",62)
r(A.Yo.prototype,"ga57","ayZ",30)
u(A.Wa.prototype,"gaAh","aAi",36)
t(A,"c7s",3,null,["$3"],["bW9"],63,0)
t(A,"c7r",3,null,["$3"],["bSd"],64,0)
w(A,"c7v","c8E",1)
t(A,"bMG",4,null,["$5$size","$4"],["bL6",function(d,e,f,g){return A.bL6(d,e,f,g,null)}],65,0)
s(A,"bBO","c8C",66)
s(A,"bMH","c52",67)
s(A,"bMK","c6h",68)
s(A,"bMJ","c6d",3)
s(A,"bMI","c6c",3)
w(A,"c7u","bMh",70)
w(A,"c7t","bMg",71)
t(A,"a_P",3,null,["$3"],["c7p"],48,0)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.S,[A.a7h,A.ah_,A.amf,A.J3,A.Ju,A.agY,A.Ic,A.Iw,A.alz,A.amR,A.UZ,A.Yz,A.Uc,A.Un,A.ank,A.ajB,A.Cu,A.ata,A.wP,A.KZ,A.AZ])
u(B.C,[A.uX,A.Et,A.bk,A.ai6,A.ahX,A.ahZ,A.ai_,A.ahP,A.alj,A.ai2,A.ai0,A.ayG,A.ate,A.ayt,A.ahY,A.L7,A.a6j,A.tC,A.arA,A.arz,A.ahO,A.ali,A.eD,A.alf,A.alh,A.apE,A.am6,A.atV,A.alg,A.akW,A.ale,A.ay7,A.bgE,A.aya,A.ahL,A.o3,A.alb,A.alc,A.vI,A.hs,A.amZ,A.an1,A.ahU,A.ai7,A.ahV,A.ald,A.an4,A.an2,A.atd,A.ary,A.aLd,A.an0,A.vt,A.a1O,A.anb,A.a1Z,A.b2N])
u(B.uV,[A.qv,A.vx,A.wu,A.aAY,A.aC5,A.ok,A.D1,A.ol])
u(B.o9,[A.aFL,A.aFM,A.aFN,A.aG3,A.bua,A.bub,A.bw3,A.buc,A.bu9,A.bu8,A.aFT,A.aFZ,A.aFS,A.aKZ,A.bgk,A.bgl,A.bgm,A.bgn,A.bgo,A.bgp,A.bgq,A.bgr,A.bgs,A.bgt,A.bgu,A.bth,A.boS,A.b6x,A.b7m,A.b7n,A.bh2,A.bqA,A.b50,A.b53,A.b54,A.btf,A.b56,A.ayr,A.ayu,A.ay9,A.b_h,A.b_i,A.b_j,A.b_k,A.b_l,A.aVt,A.aVu,A.aVv,A.aVx,A.aVy,A.aVA,A.aVB,A.aVC,A.aVD,A.aVE,A.aVF,A.bgJ,A.bgK,A.aLc,A.bu_,A.btZ,A.btX,A.aLe,A.aLf,A.ayk,A.aBx])
t(A.yC,B.fG)
u(B.y0,[A.aFK,A.aFJ,A.aG1,A.aFU,A.aFV,A.aFW,A.aFX,A.aFY,A.aG0,A.aFQ,A.aFR,A.bjl,A.bjm,A.bjn,A.aL0,A.bgw,A.bgx,A.btg,A.bgy,A.b52,A.b4V,A.b4W,A.b4Z,A.b5_,A.bte,A.b4P,A.b4Q,A.b4R,A.b4T,A.b4S,A.b4U,A.b55,A.ayx,A.aVw,A.aVz,A.bgH,A.bgI,A.aLh,A.aLi,A.ayo])
u(B.y9,[A.yD,A.aox,A.a7i,A.ahT])
u(B.y1,[A.aG_,A.bjk,A.bpj,A.aL_,A.bgv,A.boQ,A.boR,A.b6w,A.b6y,A.b6z,A.b7o,A.b7p,A.bh3,A.bqB,A.b51,A.b4X,A.b4Y,A.ays,A.ayw,A.ay8,A.bgG,A.aLj,A.aLk,A.ayl,A.ayp,A.aym,A.ayn,A.aIj])
u(B.M,[A.Bu,A.RM])
u(B.a0,[A.TQ,A.Yo])
u(B.NZ,[A.L3,A.OE])
u(B.uw,[A.TR,A.Wa])
t(A.a1p,A.ai6)
t(A.ahK,A.a1p)
t(A.a1a,A.ahK)
u(A.a1a,[A.ahW,A.an_])
t(A.o4,A.ahW)
u(B.Ib,[A.ayi,A.aeu,A.Di,A.aF_,A.aL1,A.NI])
t(A.fO,A.ahX)
t(A.iv,A.ahZ)
t(A.mO,A.ai_)
t(A.a1h,A.ahP)
t(A.Ni,A.alj)
u(A.Ni,[A.ai1,A.an3])
t(A.a1l,A.ai1)
t(A.a1m,A.ai2)
t(A.Dk,A.ai0)
u(A.ayG,[A.L4,A.OG])
t(A.aew,A.ate)
t(A.ai3,A.aew)
t(A.a1n,A.ai3)
u(B.bb,[A.xL,A.zr])
t(A.uC,A.ahY)
t(A.KY,A.L7)
u(A.KY,[A.ayv,A.aLg])
u(B.OA,[A.a1j,A.a7v])
u(B.H,[A.Gh,A.ahM])
u(A.Gh,[A.abw,A.abJ])
t(A.qj,A.arA)
t(A.ad1,A.arz)
t(A.po,A.ahO)
t(A.uZ,A.ali)
t(A.yF,A.alf)
t(A.pM,A.alh)
t(A.Qn,A.apE)
t(A.n7,A.am6)
t(A.nC,A.atV)
u(A.pM,[A.am5,A.atU])
t(A.kW,A.am5)
t(A.ln,A.atU)
t(A.a5F,A.alg)
u(A.a5F,[A.am4,A.atT])
t(A.a6u,A.am4)
t(A.aeR,A.atT)
t(A.N4,A.akW)
t(A.uY,A.ale)
t(A.Nb,A.uY)
t(A.ad2,B.fU)
t(A.ahN,A.ahM)
t(A.TO,A.ahN)
t(A.a1b,A.TO)
t(A.jW,A.ahL)
t(A.a5C,A.alb)
t(A.a5E,A.alc)
u(A.hs,[A.a5I,A.a5J,A.a5K,A.Nd,A.Ne,A.a5N,A.Ng,A.Nh,A.a5H,A.a5G,A.Nc,A.a5L,A.a5M,A.Nf])
t(A.pW,A.an_)
t(A.ee,A.amZ)
t(A.OF,A.an1)
t(A.a1i,A.ahU)
t(A.mP,A.ai7)
t(A.L2,A.ahV)
t(A.yE,A.ald)
t(A.F7,A.an3)
t(A.a7w,A.an4)
t(A.amY,A.eD)
t(A.nd,A.amY)
t(A.qt,A.nd)
t(A.rI,A.an2)
t(A.tD,A.atd)
t(A.GJ,A.ary)
t(A.zs,A.an0)
t(A.zx,A.anb)
w(A.ahP,A.bk)
w(A.ahW,A.bk)
w(A.ahX,A.bk)
w(A.ahZ,A.bk)
w(A.ai_,A.bk)
w(A.ai0,A.bk)
w(A.ai1,A.bk)
w(A.ai2,A.bk)
w(A.ai3,A.bk)
w(A.ahY,A.bk)
w(A.ahK,A.bk)
w(A.ahO,A.bk)
w(A.akW,A.bk)
w(A.ale,A.bk)
w(A.alf,A.bk)
w(A.alh,A.bk)
w(A.ali,A.bk)
w(A.am5,A.bk)
w(A.am4,A.bk)
w(A.am6,A.bk)
w(A.apE,A.bk)
w(A.arz,A.bk)
w(A.arA,A.bk)
w(A.ate,A.bk)
w(A.atU,A.bk)
w(A.atT,A.bk)
w(A.atV,A.bk)
w(A.ahL,A.bk)
v(A.ahM,B.aE)
w(A.ahN,B.eb)
v(A.TO,B.a4C)
w(A.ai6,A.bk)
w(A.alb,A.bk)
w(A.alc,A.bk)
w(A.alj,A.bk)
w(A.ahU,A.bk)
w(A.ahV,A.bk)
w(A.ai7,A.bk)
w(A.ald,A.bk)
w(A.alg,A.bk)
w(A.amY,A.bk)
w(A.amZ,A.bk)
w(A.an_,A.bk)
w(A.an1,A.bk)
w(A.an2,A.bk)
w(A.an3,A.bk)
w(A.an4,A.bk)
w(A.ary,A.bk)
w(A.atd,A.bk)
w(A.an0,A.bk)
w(A.anb,A.bk)})()
B.bqO(b.typeUniverse,JSON.parse('{"a7h":{"S":[],"c":[]},"Et":{"aFP":[]},"yC":{"fG":["be<~>"],"fG.T":"be<~>"},"Ju":{"S":[],"c":[]},"Ic":{"S":[],"c":[]},"yD":{"bf":[],"M":[],"c":[]},"ah_":{"S":[],"c":[]},"amf":{"S":[],"c":[]},"aox":{"bf":[],"M":[],"c":[]},"J3":{"S":[],"c":[]},"agY":{"S":[],"c":[]},"Iw":{"S":[],"c":[]},"wP":{"S":[],"c":[]},"Bu":{"M":[],"c":[]},"a7i":{"bf":[],"M":[],"c":[]},"alz":{"S":[],"c":[]},"amR":{"S":[],"c":[]},"UZ":{"S":[],"c":[]},"Yz":{"S":[],"c":[]},"Uc":{"S":[],"c":[]},"Un":{"S":[],"c":[]},"ank":{"S":[],"c":[]},"ajB":{"S":[],"c":[]},"Cu":{"S":[],"c":[]},"ata":{"S":[],"c":[]},"ahT":{"bf":[],"M":[],"c":[]},"TQ":{"a0":["Bu"]},"L3":{"M":[],"c":[]},"TR":{"a0":["L3"]},"o4":{"bk":[]},"fO":{"bk":[]},"iv":{"bk":[]},"mO":{"bk":[]},"Dk":{"bk":[]},"xL":{"bb":["o4"],"b8":["o4"],"b8.T":"o4","bb.T":"o4"},"a1h":{"bk":[]},"a1l":{"bk":[]},"a1m":{"bk":[]},"a1n":{"bk":[]},"uC":{"bk":[]},"a1j":{"aV":[],"c":[]},"abw":{"H":[],"K":[],"jC":[],"aT":[]},"pM":{"bk":[]},"n7":{"bk":[]},"nC":{"bk":[]},"kW":{"bk":[]},"ln":{"bk":[]},"uY":{"bk":[]},"a1a":{"bk":[]},"qj":{"bk":[]},"ad1":{"bk":[]},"po":{"bk":[]},"uZ":{"bk":[]},"yF":{"bk":[]},"aew":{"bk":[]},"Qn":{"bk":[]},"a6u":{"bk":[]},"aeR":{"bk":[]},"N4":{"bk":[]},"Nb":{"bk":[]},"KZ":{"S":[],"c":[]},"RM":{"M":[],"c":[]},"Yo":{"a0":["RM"]},"jW":{"bk":[]},"ad2":{"fU":[],"aV":[],"c":[]},"a1b":{"eb":["H","ht"],"H":[],"aE":["H","ht"],"K":[],"aT":[],"aE.1":"ht","eb.1":"ht","aE.0":"H"},"AZ":{"S":[],"c":[]},"a1p":{"bk":[]},"a5C":{"bk":[]},"Ni":{"bk":[]},"a5E":{"bk":[]},"a5I":{"hs":[]},"a5J":{"hs":[]},"a5K":{"hs":[]},"Nd":{"hs":[]},"Ne":{"hs":[]},"a5N":{"hs":[]},"Ng":{"hs":[]},"Nh":{"hs":[]},"a5H":{"hs":[]},"a5G":{"hs":[]},"Nc":{"hs":[]},"a5L":{"hs":[]},"a5M":{"hs":[]},"Nf":{"hs":[]},"Gh":{"H":[],"K":[],"jC":[],"aT":[]},"OE":{"M":[],"c":[]},"Wa":{"a0":["OE"]},"pW":{"bk":[]},"ee":{"bk":[]},"mP":{"bk":[]},"nd":{"eD":[],"bk":[]},"qt":{"nd":[],"eD":[],"bk":[]},"rI":{"bk":[]},"tD":{"bk":[]},"GJ":{"bk":[]},"zr":{"bb":["pW"],"b8":["pW"],"b8.T":"pW","bb.T":"pW"},"OF":{"bk":[]},"a1i":{"bk":[]},"L2":{"bk":[]},"yE":{"bk":[]},"a5F":{"bk":[]},"F7":{"bk":[]},"a7w":{"bk":[]},"zs":{"bk":[]},"a7v":{"aV":[],"c":[]},"abJ":{"H":[],"K":[],"jC":[],"aT":[]},"zx":{"bk":[]}}'))
B.bKA(b.typeUniverse,JSON.parse('{"KY":1,"Ni":1,"L7":1,"Gh":1}'))
var y={b:'Cannot use "ref" after the widget was disposed.'}
var x=(function rtii(){var w=B.au
return{_:w("D1"),e:w("be<ok>"),aN:w("be<ol>"),fM:w("be<a3<f,@>?>"),b:w("be<~>"),W:w("jW"),B:w("o4"),dB:w("fO"),gF:w("uC"),fj:w("iv"),G:w("mO"),bO:w("mP"),k:w("at"),C:w("a1Z<F>"),dO:w("uJ"),R:w("a5<f,@>"),g:w("hO"),bz:w("lP<b_>"),f0:w("lQ"),E:w("bk"),F:w("yC"),X:w("ok"),P:w("lV"),D:w("uX"),a:w("aFP"),d:w("ol"),cw:w("eD"),L:w("ht"),m:w("dh<v,E>"),cm:w("kW"),dv:w("n7"),M:w("B<o3>"),I:w("B<bEG>"),O:w("B<fO>"),Y:w("B<iv>"),U:w("B<eD>"),K:w("B<a6j>"),u:w("B<ee>"),bC:w("B<vt>"),aA:w("B<u<eD>>"),v:w("B<eg>"),r:w("B<GJ>"),s:w("B<f>"),eg:w("B<qr>"),df:w("B<qt>"),p:w("B<c>"),n:w("B<F>"),t:w("B<v>"),eF:w("bl<a0<M>>"),Z:w("nd"),cz:w("ee"),hf:w("pW"),dj:w("zs"),fT:w("rI"),c_:w("iy<p7<be<~>>>"),x:w("zx<fO>"),y:w("zx<ee>"),J:w("u<v>"),ef:w("vx"),c:w("a3<f,@>"),f:w("a3<@,@>"),gj:w("ae<F,F>"),w:w("ka"),aU:w("C"),Q:w("vI<o4>"),o:w("vI<pW>"),dc:w("eg"),eo:w("q9"),gJ:w("qa"),V:w("nu<lV>"),N:w("f"),A:w("nv"),bP:w("bw"),er:w("qr"),j:w("wu"),dw:w("qt"),bY:w("tD"),cZ:w("qv"),gc:w("ip"),es:w("ln"),bN:w("nC"),l:w("c"),q:w("x7"),g4:w("ir<F>"),cJ:w("A"),i:w("F"),z:w("@"),S:w("v"),bn:w("xL?"),f3:w("zr?"),T:w("u<@>?"),h:w("a3<f,@>?"),fF:w("a3<@,@>?"),cK:w("C?"),aD:w("ip?"),h6:w("v?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Bi=new B.pj(C.m,B.au("pj<E>"))
D.Bp=new A.Di(0,"left")
D.mJ=new A.Di(1,"top")
D.Bq=new A.Di(2,"right")
D.dN=new A.Di(3,"bottom")
D.ayU=new A.qj(!1,A.bBi(),22,null)
D.kx=new A.po(16,null,D.ayU,!0)
D.a98=new A.pM(C.E,null,2,null)
D.vX=new A.L2(!1,D.a98,A.c7v(),!0)
D.a0c=new A.ayi(3,"spaceEvenly")
D.a0n=new B.r3(6,"dstIn")
D.XR=new B.aX(3,3)
D.Bt=new B.d9(D.XR,D.XR,C.a3,C.a3)
D.a0y=new B.bm(C.E,0,C.U,-1)
D.C2=new A.a5E()
D.a23=new A.Nd()
D.a24=new A.Ng()
D.aQA=new A.ad1()
D.ama=w([],B.au("B<kW>"))
D.amb=w([],B.au("B<ln>"))
D.Ee=new A.N4(D.ama,D.amb,!0)
D.a8T=new B.e8("Zeitraum",!1,null)
D.a8X=new B.e8("Konten (SKR 03)",!1,null)
D.xO=new A.aF_(0,"center")
D.aQM=new A.yE(!0,A.bBO(),A.bMG())
D.Ei=new A.yE(!1,A.bBO(),A.bMG())
D.Ej=new A.yF(!1,!0,null,A.avN(),A.a_J(),!0,null,A.avN(),A.a_J())
D.aQN=new A.yF(!0,!0,null,A.avN(),A.a_J(),!0,null,A.avN(),A.a_J())
D.a4q=new B.E(1,0.9254901960784314,0.9372549019607843,0.9450980392156862,C.i)
D.a4c=new B.E(1,0.8117647058823529,0.8470588235294118,0.8627450980392157,C.i)
D.a4z=new B.E(1,0.6901960784313725,0.7450980392156863,0.7725490196078432,C.i)
D.a4u=new B.E(1,0.5647058823529412,0.6431372549019608,0.6823529411764706,C.i)
D.a3W=new B.E(1,0.47058823529411764,0.5647058823529412,0.611764705882353,C.i)
D.a3V=new B.E(1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.a4S=new B.E(1,0.32941176470588235,0.43137254901960786,0.47843137254901963,C.i)
D.a4k=new B.E(1,0.27058823529411763,0.35294117647058826,0.39215686274509803,C.i)
D.a4X=new B.E(1,0.21568627450980393,0.2784313725490196,0.30980392156862746,C.i)
D.a4P=new B.E(1,0.14901960784313725,0.19607843137254902,0.2196078431372549,C.i)
D.asp=new B.dh([50,D.a4q,100,D.a4c,200,D.a4z,300,D.a4u,400,D.a3W,500,D.a3V,600,D.a4S,700,D.a4k,800,D.a4X,900,D.a4P],x.m)
D.dp=new B.rO(D.asp,1,0.3764705882352941,0.49019607843137253,0.5450980392156862,C.i)
D.aii=w([8,4],x.t)
D.a96=new A.pM(D.dp,null,0.4,D.aii)
D.a97=new A.pM(C.am,null,0.5,null)
D.fS=new A.eD(0/0,0/0)
D.ayW=new A.qj(!0,A.bBi(),44,null)
D.mK=new A.po(16,null,D.ayW,!0)
D.ayV=new A.qj(!0,A.bBi(),30,null)
D.mL=new A.po(16,null,D.ayV,!0)
D.a99=new A.uZ(!1,D.mK,D.mL,D.mK,D.mL)
D.aQO=new A.uZ(!0,D.mK,D.mL,D.mK,D.mL)
D.Es=new A.NI(0,"left")
D.a9N=new A.NI(1,"center")
D.Et=new A.NI(2,"right")
D.a9S=new B.a6(57495,"MaterialIcons",null,!1)
D.y6=new B.a6(58927,"MaterialIcons",null,!1)
D.aaB=new B.a6(59005,"MaterialIcons",null,!0)
D.aaC=new B.a6(59007,"MaterialIcons",null,!0)
D.aaD=new B.a6(59011,"MaterialIcons",null,!1)
D.aaT=new B.a6(61349,"MaterialIcons",null,!1)
D.ac1=new B.aF(D.aaT,20,C.j,null,null)
D.aaZ=new B.a6(61487,"MaterialIcons",null,!1)
D.acj=new B.aF(D.aaZ,18,null,null,null)
D.ack=new B.aF(D.y6,18,null,null,null)
D.ad0=new B.aF(C.lf,null,C.p,null,null)
D.ada=new B.aF(C.lh,16,null,null,null)
D.adi=new B.aF(C.F1,16,null,null,null)
D.adl=new B.aF(C.i5,null,C.j,null,null)
D.abx=new B.a6(62584,"MaterialIcons",null,!1)
D.adu=new B.aF(D.abx,16,null,null,null)
D.adA=new B.aF(D.y6,16,null,null,null)
D.adG=new B.aF(F.EC,null,C.an,null,null)
D.afG=new A.a7i(null)
D.aQS=new A.aL1(0,"horizontal")
D.yv=new A.zs(0,0,0,0,!1)
D.FM=new A.OF(0.5)
D.C8=new A.a7w()
D.afL=new A.F7(D.C8,A.bMK(),10,A.bMH(),!0,A.bMJ(),A.bMI(),!1,null,null,null)
D.aQT=new A.F7(D.C8,A.bMK(),10,A.bMH(),!0,A.bMJ(),A.bMI(),!0,null,null,null)
D.ahf=w([4,3],x.t)
D.ax1=new B.an("cash_and_bank","Fl\xfcssige Mittel (Kasse/Bank)")
D.awK=new B.an("receivables","Forderungen (kurzfristig)")
D.awt=new B.an("inventory_value","Vorr\xe4te (Warenbestand)")
D.awo=new B.an("other_current_assets","Sonstiges Umlaufverm\xf6gen")
D.aw2=new B.an("fixed_assets","Anlageverm\xf6gen")
D.awg=new B.an("current_liabilities","Kurzfristige Verbindlichkeiten")
D.awU=new B.an("long_term_liabilities","Langfristige Verbindlichkeiten")
D.awJ=new B.an("equity","Eigenkapital")
D.pB=w([D.ax1,D.awK,D.awt,D.awo,D.aw2,D.awg,D.awU,D.awJ],B.au("B<+(f,f)>"))
D.aQV=w([],x.M)
D.alX=w([],x.O)
D.alY=w([],x.Y)
D.alZ=w([],B.au("B<mO>"))
D.am_=w([],B.au("B<mP>"))
D.aQW=w([],x.U)
D.aQX=w([],x.u)
D.am0=w([],x.r)
D.at3={current:0,prior_year:1,prior_period:2,trend:3,machines:4,top_products:5,customer:6,derived:7}
D.To={revenue_net_7:0,revenue_net_19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.z8=new B.a5(D.To,[0,0,0,0,0,0,0,C.bo],B.au("a5<f,C>"))
D.at1={purchases_count:0,app_gross:1,active_customers:2,avg_basket:3}
D.asj=new B.a5(D.at1,[0,0,0,0],B.au("a5<f,v>"))
D.ati={gross_margin_pct:0,net_margin_pct:1,ebitda_margin_pct:2,cashflow_operating:3,revenue_growth_yoy_pct:4,revenue_growth_mom_pct:5,result_growth_yoy_pct:6,result_growth_mom_pct:7}
D.apU=new B.a5(D.ati,[0,0,0,0,null,null,null,null],B.au("a5<f,v?>"))
D.apO=new B.a5(D.at3,[D.z8,D.z8,D.z8,C.bo,C.bo,C.bo,D.asj,D.apU],x.R)
D.aq6=new B.a5(D.To,[0,0,0,0,0,0,0,C.cp],x.R)
D.at4={cash_and_bank:0,receivables:1,inventory_value:2,other_current_assets:3,fixed_assets:4,current_liabilities:5,long_term_liabilities:6,equity:7}
D.aq8=new B.a5(D.at4,[8500,1200,3400,300,22e3,4200,9000,22200],B.au("a5<f,F>"))
D.at0={revenue_net7:0,revenue_net19:1,revenue_net:2,expense_net:3,result_net:4,vat_collected:5,vat_paid:6,accounts:7}
D.ask=new B.a5(D.at0,[0,0,0,0,0,0,0,C.cp],x.R)
D.atv={"fl\xfcssige mittel":0,kasse:1,bank:2,forderungen:3,"vorr\xe4te":4,warenbestand:5,"sonstiges umlaufverm\xf6gen":6,"anlageverm\xf6gen":7,"kurzfristige verbindlichkeiten":8,"langfristige verbindlichkeiten":9,eigenkapital:10}
D.asl=new B.a5(D.atv,["cash_and_bank","cash_and_bank","cash_and_bank","receivables","inventory_value","inventory_value","other_current_assets","fixed_assets","current_liabilities","long_term_liabilities","equity"],B.au("a5<f,f>"))
D.a51=new B.E(1,0.8784313725490196,0.9686274509803922,0.9803921568627451,C.i)
D.a59=new B.E(1,0.6980392156862745,0.9215686274509803,0.9490196078431372,C.i)
D.a3Z=new B.E(1,0.5019607843137255,0.8705882352941177,0.9176470588235294,C.i)
D.a4m=new B.E(1,0.30196078431372547,0.8156862745098039,0.8823529411764706,C.i)
D.a4w=new B.E(1,0.14901960784313725,0.7764705882352941,0.8549019607843137,C.i)
D.a5m=new B.E(1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a3K=new B.E(1,0,0.6745098039215687,0.7568627450980392,C.i)
D.a4o=new B.E(1,0,0.592156862745098,0.6549019607843137,C.i)
D.a4y=new B.E(1,0,0.5137254901960784,0.5607843137254902,C.i)
D.a4Q=new B.E(1,0,0.3764705882352941,0.39215686274509803,C.i)
D.asq=new B.dh([50,D.a51,100,D.a59,200,D.a3Z,300,D.a4m,400,D.a4w,500,D.a5m,600,D.a3K,700,D.a4o,800,D.a4y,900,D.a4Q],x.m)
D.Td=new B.rO(D.asq,1,0,0.7372549019607844,0.8313725490196079,C.i)
D.a8i=new B.al(32,32,32,32)
D.auq=new B.ai(D.a8i,C.bF,null)
D.aux=new B.ai(C.ai,C.bF,null)
D.amc=w([],B.au("B<n7>"))
D.amd=w([],B.au("B<nC>"))
D.XS=new A.Qn(D.amc,D.amd)
D.axT=new B.fk("Vergleich","Aktueller vs. Vergleichszeitraum",null,null)
D.axU=new B.fk("Automaten-Business","App-K\xe4ufe im Zeitraum",null,null)
D.axY=new B.fk("Automaten-Business","Umsatz je Automat",null,null)
D.ay_=new B.fk("Trend & Vergleich","Cashflow-Entwicklung",null,null)
D.ay1=new B.fk("Top","Meistverkaufte Produkte",null,null)
D.ay5=new B.fk("Bilanz","Liquidit\xe4t & Eigenkapital",null,null)
D.ay6=new B.fk("Kennzahlen","Rentabilit\xe4t",null,null)
D.YB=new B.tl(C.F,C.t,0)
D.aGq=new B.ab("sevDesk-Bilanz wird abgerufen \u2026",null,null,null,null,null,null,null,null,null)
D.aAu=new B.dE(D.aGq,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aID=new B.ab('Keine Bilanzwerte erkannt. Format: \u201eFeld;Betrag" je Zeile.',null,null,null,null,null,null,null,null,null)
D.aAx=new B.dE(D.aID,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aGC=new B.ab("sevDesk ist noch nicht verbunden. Bitte Bilanz manuell erfassen oder per BWA/CSV importieren \u2014 der Sync \xfcbernimmt sp\xe4ter automatisch.",null,null,null,null,null,null,null,null,null)
D.aAy=new B.dE(D.aGC,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aIx=new B.ab("PDF-Export fehlgeschlagen.",null,null,null,null,null,null,null,null,null)
D.aAA=new B.dE(D.aIx,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHY=new B.ab("Bilanzwerte gespeichert.",null,null,null,null,null,null,null,null,null)
D.aAB=new B.dE(D.aHY,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aHV=new B.ab("Demo-Bilanz geladen \u2014 bitte pr\xfcfen.",null,null,null,null,null,null,null,null,null)
D.aAX=new B.dE(D.aHV,null,null,null,null,null,null,null,null,null,null,null,null,C.I,!1,null,null,null,C.n,null)
D.aR6=new B.P(!0,C.E,null,null,null,null,14,C.S,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aGz=new B.ab("Demo",null,null,null,null,null,null,null,null,null)
D.aGM=new B.ab("BWA/CSV",null,null,null,null,null,null,null,null,null)
D.aHE=new B.ab("sevDesk abrufen",null,null,null,null,null,null,null,null,null)
D.aHN=new B.ab("Aktualisieren",null,null,null,null,null,null,null,null,null)
D.aI1=new B.ab("sevDesk",null,null,null,null,null,null,null,null,null)
D.aIQ=new B.ab("Bilanzwerte erfassen",null,null,null,null,null,null,null,null,null)
D.ZS=new A.aeu(0,"auto")
D.aJp=new A.aeu(1,"top")
D.aNG=new A.wP("Im gew\xe4hlten Zeitraum wurden keine Ums\xe4tze je Automat erfasst.",null)
D.aNH=new A.wP("Noch keine Trend-Daten f\xfcr den Zeitraum.",null)})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"cgu","bQZ",()=>B.hV(new A.bua(),x.D))
w($,"cgv","awn",()=>B.hV(new A.bub(),x.a))
w($,"cht","xv",()=>B.b0a(new A.bw3(),x.P))
w($,"cgw","bx3",()=>C.aL.$1$1(new A.buc(),x.d))
w($,"cgt","bQY",()=>C.aL.$1$1(new A.bu9(),x.X))
w($,"cgs","bx2",()=>C.aL.$1$1(new A.bu8(),x.h))
w($,"cgr","bx1",()=>B.b07(A.c6x(),x.F,x.b))
w($,"c9s","bwy",()=>new A.ay7())
v($,"ccL","lH",()=>new A.b2N())})()};
(a=>{a["VXM/znYJ0hu9/6/smhBG4Qhj5hQ="]=a.current})($__dart_deferred_initializers__);