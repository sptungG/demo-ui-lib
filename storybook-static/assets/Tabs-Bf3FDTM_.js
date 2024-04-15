import{j as i,W as S,s as m,A as p}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as n}from"./index-BjzEU6Zr.js";import{S as j,a as R,b as E}from"./OffOutlineCloseIcon-C3ZF4iWJ.js";import{u as L}from"./useRippleCenter-fyPqct0G.js";import{v as W}from"./v4-8I8R7izr.js";const f=n.memo(({tabs:e,onDelete:r,onChange:t,value:a,children:d,unlimitedWidth:y=!1,size:v="regular",...$})=>{const[c,T]=n.useState(0),[h,w]=n.useState(2),[b,x]=n.useState(!0),s=n.useRef(null);n.useEffect(()=>{var l,u;s.current&&(((l=s==null?void 0:s.current)==null?void 0:l.offsetWidth)<((u=s==null?void 0:s.current)==null?void 0:u.scrollWidth)?x(!0):x(!1));const o=document.getElementById("scroller");o==null||o.addEventListener("scroll",()=>{T(o.scrollLeft),w(o.scrollWidth-o.clientWidth)})}),n.useEffect(()=>{const o=document.getElementById(a),l=document.getElementById("scroller");o&&l&&(l.scrollLeft=o.offsetLeft-l.offsetWidth/2)},[e,a]);const k=()=>{const o=document.getElementById("scroller");o&&(o.scrollLeft=o.scrollLeft-400)},I=()=>{const o=document.getElementById("scroller");o&&(o.scrollLeft=o.scrollLeft+400)};return i.jsxs(D,{children:[b?i.jsx(g,{onClick:k,noIcon:c===0||c+1>h,children:c!==0?i.jsx(j,{size:"regular"}):null}):null,i.jsx(q,{id:"scroller",ref:s,children:i.jsx(B,{...$,children:e==null?void 0:e.filter(o=>o.isShow||o.isShow===null||o.isShow===void 0).map((o,l)=>i.jsxs(A,{id:o.id,size:v,unlimitedWidth:y,active:o.id===a,onClick:()=>{t(o)},children:[o.label,(o.canDelete||!1)&&i.jsx(R,{className:"closeIcon",onClick:u=>{u.stopPropagation(),r&&r(o)}})]},l))})}),b?i.jsx(g,{onClick:I,noIcon:c===0||c+1>h,children:c<h-1?i.jsx(E,{size:"regular"}):null}):null]})}),g=e=>{const r=n.useMemo(()=>W(),[]);return L(r),i.jsx(C,{...e,id:r})},z=S`
  from {
    transform: scale(0);
    opacity: 1.2;
  }
  to {
    transform: scale(1.1);
    opacity: 0;
  }
`,C=m.div`
  display: inline-flex;
  justify-content: center;
  flex: none;
  position: relative;
  align-items: center;
  align-self: center;
  padding: 0;
  outline: none;
  border: none;
  height: ${e=>e.theme.pxToRem(48)};
  width: ${e=>e.theme.pxToRem(40)};
  color: ${e=>e.theme.palette.ink[40]};
  z-index: 1;

  ${({noIcon:e})=>{if(!e)return p`
        .ripple {
          height: ${r=>r.theme.pxToRem(20)};
          width: ${r=>r.theme.pxToRem(20)};
          position: absolute;
          border-radius: 50%;
          background-color: ${r=>r.theme.palette.primary[60]};
          z-index: 0;
          animation: ${z} 0.8s forwards;
        }
      `}}
  &:hover {
    color: ${e=>e.theme.palette.primary.main};
  }
`,D=m.div`
  display: flex;
  background-color: white;
  justify-items: center;
  align-content: center;
  cursor: pointer;
  -moz-box-shadow: inset 0 -1px 0px 0px ${e=>e.theme.palette.ink[30]};
  -webkit-box-shadow: inset 0 -1px 0px 0px ${e=>e.theme.palette.ink[30]};
  box-shadow: inset 0 -1px 0px 0px ${e=>e.theme.palette.ink[30]};
`,q=m.div`
  white-space: nowrap;
  overflow-x: scroll;
  scroll-behavior: smooth;
  display: flex;
  box-sizing: content-box;
  background-color: transparent;
  border: none;
  cursor: pointer;

  ::-webkit-scrollbar {
    display: none;
  }
`,A=m.button`
  display: inline-block;
  justify-content: center;
  position: relative;
  padding: ${e=>e.theme.pxToRem(16)};
  padding-bottom: ${e=>e.theme.pxToRem(6)};
  padding-top: ${e=>e.theme.pxToRem(6)};
  box-sizing: border-box;
  align-items: center;
  border: none;
  border-bottom: 2px solid transparent;
  color: ${e=>e.theme.palette.ink[60]};
  background-color: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  cursor: pointer;

  .closeIcon {
    width: ${e=>e.theme.pxToRem(16)};
    height: ${e=>e.theme.pxToRem(16)};
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
  }

  ${({theme:e})=>e.typography.subtitle1};

  ${({size:e,unlimitedWidth:r})=>{let t=48,a=240;return e==="big"&&(t=64,a=320),p`
      height: ${d=>d.theme.pxToRem(t)};
      max-width: ${d=>r?"unset":d.theme.pxToRem(a)};
    `}}
  &:focus-visible {
    outline: none;
  }

  ${({size:e,active:r})=>r?e==="big"?p`
          color: ${t=>t.theme.palette.primary.main};
          text-transform: uppercase;
          font-weight: 500;
          font-size: ${t=>t.theme.pxToRem(16)};
          border-bottom: 2px solid ${t=>t.theme.palette.primary.main};

          &:hover {
            .closeIcon {
              opacity: 1;
              visibility: visible;
            }
          }
        `:p`
        color: ${t=>t.theme.palette.primary.main};
        font-weight: 500;
        border-bottom: 2px solid ${t=>t.theme.palette.primary.main};

        &:hover {
          .closeIcon {
            opacity: 1;
            visibility: visible;
          }
        }
      `:e==="big"?p`
        font-weight: 500;
        color: ${t=>t.theme.palette.ink.main};
        font-size: ${t=>t.theme.pxToRem(16)};
        text-transform: uppercase;

        &:hover {
          border-bottom: 2px solid ${t=>t.theme.palette.ink[40]};
          color: ${t=>t.theme.palette.ink[60]};
        }
        &:active {
          outline: none;
          border-bottom: 2px solid ${t=>t.theme.palette.ink[80]};
          color: ${t=>t.theme.palette.ink[80]};
        }
      `:p`
      &:hover {
        border-bottom: 2px solid ${t=>t.theme.palette.ink[40]};
        color: ${t=>t.theme.palette.ink[60]};
      }
      &:active {
        outline: none;
        border-bottom: 2px solid ${t=>t.theme.palette.ink[80]};
        color: ${t=>t.theme.palette.ink[80]};
      }
    `}
`,B=m.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 0;
  outline: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({theme:e})=>e.typography.subtitle1};
}
`;f.displayName="Tabs";const _=n.memo(f);f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabDescriptor"}],raw:"TabDescriptor[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"big" | "regular"',elements:[{name:"literal",value:'"big"'},{name:"literal",value:'"regular"'}]},description:"",defaultValue:{value:'"regular"',computed:!1}},unlimitedWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: TabDescriptor) => void",signature:{arguments:[{type:{name:"TabDescriptor"},name:"tab"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(tab: TabDescriptor) => void",signature:{arguments:[{type:{name:"TabDescriptor"},name:"tab"}],return:{name:"void"}}},description:""}}};export{_ as T};
