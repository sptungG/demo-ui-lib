  from {
    transform: scale(0);
    opacity: 1.2;
  }
  to {
    transform: scale(1.1);
    opacity: 0;
  }
`,e3=m`
  overflow: hidden;
  position: relative;
  .ripple {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-radius: 50%;
    background-color: ${e=>e.theme.palette.primary[60]};
    z-index: 0;
    animation: ${pt} 0.8s forwards;
  }
`,f=Z.forwardRef(({isLoading:e,width:l,variant:o="contained",startIcon:a,endIcon:n,disabled:t,children:i,size:s="regular",id:r,...d},w)=>{const v=g.useMemo(()=>r||`Sapo-Button-${C()}`,[r]);return Yt(v),e&&a&&(a=c.jsx(u,{})),e&&n&&(n=c.jsx(u,{})),c.jsxs(n3,{isLoading:e,...d,disabled:t,endIcon:n,startIcon:a,ref:w,variant:o,size:s,id:v,_width:l,children:[a,e&&c.jsx(r3,{}),i?c.jsx(l3,{haveStartIcon:!!a,haveEndIcon:!!n,isLoading:e,variant:o,children:i}):null,n]})}),r3=h(z)`
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
`,l3=h.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({haveEndIcon:e,theme:l})=>e?l.pxToRem(8):0} 0
    ${({haveStartIcon:e,theme:l})=>e?l.pxToRem(8):0};
  z-index: 2;
  font-size: inherit;
  font-weight: inherit;
  ${({isLoading:e})=>{if(e)return m`
        color: transparent;
      `}}
`,n3=h.button`
  display: inline-flex;
  justify-content: center;
  flex: none;
  position: relative;
  align-items: center;
  padding: 0;
  outline: 0;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  ${({theme:e})=>e.typography.subtitle1};
  
  ${()=>e3}
  
  svg {
    height: ${e=>e.theme.pxToRem(20)};
    width: ${e=>e.theme.pxToRem(20)};
  }

  ${({size:e,_width:l,variant:o,theme:a})=>{let n=36,t=64,i=l?S.isNaN(+l)?l:a.pxToRem(+l):void 0;return e==="large"&&(n=48,t=128),m`
      height: ${({theme:s})=>o==="text"||o==="plain"?s.pxToRem(36):s.pxToRem(n)};
      padding: 0 ${({theme:s})=>o==="text"||o==="plain"?0:s.pxToRem(16)};
      min-width: ${({theme:s})=>o==="text"||o==="plain"?"unset":i||s.pxToRem(t)};
      width: ${i};
    `}}
  
  ${({isLoading:e})=>{if(e)return m`
        pointer-events: none;
      `}}

  ${({disabled:e})=>{if(e)return m`
        cursor: not-allowed;
      `}}

  ${({variant:e,disabled:l,destruction:o,isLoading:a})=>{switch(e){case"contained":return l?m`
            border: none;
            background: ${n=>n.theme.palette.ink[20]};
            color: ${n=>n.theme.palette.ink[60]};
          `:o?m`
            border: none;
            background: ${n=>n.theme.palette.error.main};
            color: #fff;

            .ripple {
              background-color: ${n=>n.theme.palette.error[60]};
            }

            &:hover {
              border-color: ${n=>n.theme.palette.error[80]};
              background: ${n=>n.theme.palette.error[80]};
            }

            &:focus-visible {
              background: ${n=>n.theme.palette.error[60]};
            }
          `:a?m`
            background-color: ${n=>n.theme.palette.primary[60]};
            border: none;
            color: #fff;
          `:m`
          color: #fff;
          background: ${n=>n.theme.palette.primary.main};
          border: none;

          &:hover {
            background: ${n=>n.theme.palette.primary[80]};
          }

          &:focus-visible {
            background: #007ce8;
          }
        `;case"outlined":return l?m`
            color: ${n=>n.theme.palette.text.disabled};
            background: #fff;
            border: 1px solid ${n=>n.theme.palette.ink[30]};
          `:o?m`
            border: 1px solid ${n=>n.theme.palette.error.main};
            background: #fff;
            color: ${n=>n.theme.palette.error.main};

            .ripple {
              background-color: ${n=>n.theme.palette.error[5]};
            }

            &:hover {
              background: ${n=>n.theme.palette.error[10]};
            }

            &:focus-visible {
              background: ${n=>n.theme.palette.error[5]};
            }
          `:m`
          color: ${n=>n.theme.palette.primary.main};
          border: 1px solid ${n=>n.theme.palette.primary.main};
          background: #fff;

          &:hover {
            background-color: ${n=>n.theme.palette.primary[10]};
          }

          &:focus-visible {
            background: ${n=>n.theme.palette.primary[20]};
          }
        `;case"normal":return l?m`
            color: ${n=>n.theme.palette.text.disabled};
            background: #fff;
            border: 1px solid ${n=>n.theme.palette.ink[30]};
          `:o?m`
            border: 1px solid ${n=>n.theme.palette.error.main};
            background: #fff;
            color: ${n=>n.theme.palette.error.main};

            .ripple {
              background-color: ${n=>n.theme.palette.error[5]};
            }

            &:hover {
              background: ${n=>n.theme.palette.error[10]};
            }
          `:m`
          color: ${n=>n.theme.palette.ink.main};
          border: 1px solid ${n=>n.theme.palette.stroke};
          background: #fff;

          .ripple {
            background-color: ${n=>n.theme.palette.primary[40]};
          }

          &:hover {
            background-color: ${n=>n.theme.palette.primary[5]};
          }

          &:focus-visible {
            background: ${n=>n.theme.palette.primary[15]};
          }
        `;case"text":return l?m`
            color: ${n=>n.theme.palette.ink[60]};
            border: none;
            background: transparent;
          `:o?m`
            border: none;
            background: transparent;
            color: ${n=>n.theme.palette.error.main};

            .ripple {
              background-color: transparent;
            }

            &:hover {
              color: ${n=>n.theme.palette.error[80]};
            }

            &:focus-visible {
              color: ${n=>n.theme.palette.error[60]};
            }
          `:m`
          color: ${n=>n.theme.palette.primary.main};
          border: none;
          background: transparent;
          padding: 0;

          .ripple {
            background-color: transparent;
          }

          &:hover {
            color: ${n=>n.theme.palette.primary[80]};
          }

          &:focus-visible {
            color: #007ce8;
          }
        `;case"plain":return l?m`
            color: ${n=>n.theme.palette.ink[60]};
            border: none;
            background: transparent;
          `:o?m`
            border: none;
            background: transparent;
            color: ${n=>n.theme.palette.error.main};

            .ripple {
              background-color: transparent;
            }

            &:hover {
              color: ${n=>n.theme.palette.error[80]};
            }
          `:m`
          color: ${n=>n.theme.palette.text.primary};
          border: none;
          background: transparent;
          padding: 0;

          .ripple {
            background-color: transparent;
          }

          &:hover {
            color: ${n=>n.theme.palette.primary.main};
          }
        `}}}

  ${e=>F(e)}

  ${e=>x(e)}
}
`;f.displayName="Button";const v3=g.memo(f);f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"contained"',computed:!1},required:!1},size:{defaultValue:{value:'"regular"',computed:!1},required:!1}}};export{Fe as $,Q as A,v3 as B,Y as C,p as D,ee as E,re as F,le as G,ne as H,ie as I,ae as J,te as K,se as L,ce as M,oe as N,me as O,ue as P,he as Q,ge as R,tt as S,fe as T,ve as U,de as V,we as W,ye as X,Ze as Y,ze as Z,Se as _,Yi as a,_0 as a$,xe as a0,Ce as a1,Me as a2,De as a3,Ie as a4,Ve as a5,je as a6,ke as a7,He as a8,_e as a9,a0 as aA,t0 as aB,s0 as aC,c0 as aD,o0 as aE,m0 as aF,u0 as aG,h0 as aH,g0 as aI,f0 as aJ,v0 as aK,d0 as aL,w0 as aM,y0 as aN,Z0 as aO,z0 as aP,S0 as aQ,F0 as aR,x0 as aS,C0 as aT,M0 as aU,D0 as aV,I0 as aW,V0 as aX,j0 as aY,k0 as aZ,H0 as a_,Te as aa,Ae as ab,qe as ac,Pe as ad,Le as ae,Be as af,Ge as ag,Ee as ah,Ne as ai,Re as aj,be as ak,We as al,Oe as am,Ue as an,$e as ao,Je as ap,Xe as aq,Ke as ar,Qe as as,Ye as at,pe as au,e0 as av,r0 as aw,l0 as ax,n0 as ay,i0 as az,G as b,R1 as b$,T0 as b0,A0 as b1,q0 as b2,P0 as b3,L0 as b4,B0 as b5,G0 as b6,E0 as b7,N0 as b8,R0 as b9,v1 as bA,d1 as bB,w1 as bC,y1 as bD,Z1 as bE,z1 as bF,S1 as bG,F1 as bH,x1 as bI,C1 as bJ,M1 as bK,D1 as bL,I1 as bM,V1 as bN,j1 as bO,k1 as bP,H1 as bQ,_1 as bR,T1 as bS,A1 as bT,q1 as bU,P1 as bV,L1 as bW,B1 as bX,G1 as bY,E1 as bZ,N1 as b_,b0 as ba,W0 as bb,O0 as bc,U0 as bd,$0 as be,J0 as bf,X0 as bg,K0 as bh,Q0 as bi,Y0 as bj,p0 as bk,e1 as bl,r1 as bm,l1 as bn,n1 as bo,i1 as bp,a1 as bq,t1 as br,s1 as bs,c1 as bt,o1 as bu,m1 as bv,u1 as bw,h1 as bx,g1 as by,f1 as bz,D as c,Qr as c$,b1 as c0,W1 as c1,O1 as c2,U1 as c3,$1 as c4,J1 as c5,X1 as c6,K1 as c7,Q1 as c8,Y1 as c9,Mr as cA,Dr as cB,Ir as cC,Vr as cD,jr as cE,kr as cF,Hr as cG,_r as cH,Tr as cI,Ar as cJ,u as cK,qr as cL,Pr as cM,Lr as cN,Br as cO,Gr as cP,Er as cQ,Nr as cR,Rr as cS,br as cT,Wr as cU,Or as cV,Ur as cW,$r as cX,Jr as cY,Xr as cZ,Kr as c_,p1 as ca,er as cb,rr as cc,lr as cd,nr as ce,ir as cf,ar as cg,tr as ch,sr as ci,cr as cj,or as ck,mr as cl,ur as cm,hr as cn,gr as co,fr as cp,vr as cq,dr as cr,wr as cs,yr as ct,Zr as cu,zr as cv,Sr as cw,Fr as cx,xr as cy,Cr as cz,I as d,tl as d$,Yr as d0,pr as d1,e2 as d2,r2 as d3,l2 as d4,n2 as d5,i2 as d6,a2 as d7,t2 as d8,s2 as d9,_2 as dA,T2 as dB,A2 as dC,q2 as dD,P2 as dE,L2 as dF,B2 as dG,G2 as dH,E2 as dI,N2 as dJ,R2 as dK,b2 as dL,W2 as dM,O2 as dN,U2 as dO,$2 as dP,J2 as dQ,X2 as dR,K2 as dS,Y2 as dT,p2 as dU,el as dV,rl as dW,Q2 as dX,ll as dY,nl as dZ,il as d_,c2 as da,o2 as db,m2 as dc,u2 as dd,h2 as de,g2 as df,f2 as dg,v2 as dh,d2 as di,w2 as dj,y2 as dk,Z2 as dl,z2 as dm,S2 as dn,F2 as dp,x2 as dq,C2 as dr,M as ds,M2 as dt,D2 as du,I2 as dv,V2 as dw,j2 as dx,k2 as dy,H2 as dz,V as e,dn as e$,al as e0,sl as e1,cl as e2,ol as e3,ml as e4,hl as e5,ul as e6,gl as e7,fl as e8,vl as e9,Rl as eA,bl as eB,Wl as eC,Ol as eD,Ul as eE,$l as eF,Jl as eG,Xl as eH,Kl as eI,Ql as eJ,Yl as eK,pl as eL,en as eM,rn as eN,ln as eO,nn as eP,an as eQ,tn as eR,sn as eS,cn as eT,on as eU,mn as eV,un as eW,hn as eX,gn as eY,fn as eZ,vn as e_,dl as ea,wl as eb,yl as ec,Zl as ed,zl as ee,Sl as ef,Fl as eg,xl as eh,Cl as ei,Ml as ej,Dl as ek,Il as el,Vl as em,jl as en,kl as eo,Hl as ep,_l as eq,Tl as er,Al as es,ql as et,Pl as eu,Ll as ev,Bl as ew,Gl as ex,El as ey,Nl as ez,j as f,Di as f$,wn as f0,yn as f1,Zn as f2,zn as f3,Sn as f4,Fn as f5,xn as f6,Cn as f7,Mn as f8,Dn as f9,pn as fA,ei as fB,ri as fC,li as fD,ni as fE,ii as fF,ai as fG,ti as fH,si as fI,ci as fJ,oi as fK,mi as fL,ui as fM,hi as fN,gi as fO,fi as fP,vi as fQ,di as fR,wi as fS,yi as fT,Zi as fU,zi as fV,Si as fW,Fi as fX,xi as fY,Ci as fZ,Mi as f_,In as fa,Vn as fb,jn as fc,kn as fd,Hn as fe,_n as ff,Tn as fg,En as fh,Nn as fi,An as fj,qn as fk,Pn as fl,Ln as fm,Bn as fn,Gn as fo,Rn as fp,bn as fq,Un as fr,Wn as fs,On as ft,$n as fu,Jn as fv,Xn as fw,Kn as fx,Qn as fy,Yn as fz,k as g,La as g$,Ii as g0,Vi as g1,ji as g2,ki as g3,Hi as g4,_i as g5,Ti as g6,Ai as g7,qi as g8,Pi as g9,ma as gA,ua as gB,ha as gC,ga as gD,fa as gE,va as gF,da as gG,wa as gH,ya as gI,Za as gJ,za as gK,Sa as gL,Fa as gM,xa as gN,Ca as gO,Ma as gP,Da as gQ,Ia as gR,Va as gS,ja as gT,ka as gU,Ha as gV,_a as gW,Ta as gX,Aa as gY,qa as gZ,Pa as g_,Li as ga,Bi as gb,Gi as gc,Ei as gd,Ni as ge,Ri as gf,bi as gg,Wi as gh,Oi as gi,Ui as gj,$i as gk,Ji as gl,Xi as gm,Ki as gn,Qi as go,pi as gp,ea as gq,ra as gr,na as gs,ia as gt,aa as gu,ta as gv,sa as gw,ca as gx,oa as gy,la as gz,H as h,$4 as h$,Ba as h0,Ga as h1,Ea as h2,Na as h3,Ra as h4,ba as h5,Wa as h6,Oa as h7,Ua as h8,$a as h9,z4 as hA,S4 as hB,F4 as hC,x4 as hD,C4 as hE,M4 as hF,D4 as hG,I4 as hH,V4 as hI,j4 as hJ,k4 as hK,H4 as hL,_4 as hM,T4 as hN,A4 as hO,q4 as hP,P4 as hQ,L4 as hR,B4 as hS,G4 as hT,E4 as hU,N4 as hV,R4 as hW,b4 as hX,W4 as hY,O4 as hZ,U4 as h_,Ja as ha,Xa as hb,Ka as hc,Qa as hd,Ya as he,pa as hf,e4 as hg,r4 as hh,l4 as hi,n4 as hj,i4 as hk,a4 as hl,t4 as hm,s4 as hn,c4 as ho,o4 as hp,m4 as hq,u4 as hr,h4 as hs,g4 as ht,f4 as hu,v4 as hv,d4 as hw,w4 as hx,y4 as hy,Z4 as hz,_ as i,J4 as i0,X4 as i1,K4 as i2,Q4 as i3,Y4 as i4,p4 as i5,et as i6,rt as i7,lt as i8,nt as i9,jt as iA,kt as iB,Ht as iC,_t as iD,Tt as iE,At as iF,qt as iG,Pt as iH,Lt as iI,Bt as iJ,Gt as iK,Et as iL,Nt as iM,Rt as iN,bt as iO,Wt as iP,Ot as iQ,Ut as iR,$t as iS,Jt as iT,Xt as iU,Kt as iV,Qt as iW,it as ia,at as ib,st as ic,ct as id,ot as ie,mt as ig,ut as ih,ht as ii,gt as ij,ft as ik,vt as il,dt as im,wt as io,yt as ip,Zt as iq,zt as ir,St as is,Ft as it,xt as iu,Ct as iv,Mt as iw,Dt as ix,It as iy,Vt as iz,T as j,A as k,q as l,P as m,L as n,B as o,E as p,N as q,R as r,b as s,W as t,O as u,U as v,$ as w,J as x,X as y,K as z};