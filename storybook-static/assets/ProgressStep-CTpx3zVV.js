import{X as l,j as a,s as m,A as c}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as g}from"./index-BjzEU6Zr.js";import{S as u,a as $}from"./OffCloseIcon-dIrXP-IS.js";const h=({isFailedAll:e,isCurrentFailed:n,steps:o,current:s,...i})=>{l();const t=o.findIndex(p=>p.id===s);return a.jsx(y,{...i,children:o==null?void 0:o.map((p,r)=>a.jsxs(T,{children:[r!==0&&a.jsx(d,{isFailedAll:e,red:t===r&&n,blue:r<=t}),a.jsxs(b,{children:[a.jsxs(f,{finalStep:r+1===o.length,isFailedAll:e,failed:t===r&&n||r+1===o.length&&e,inProgress:r===t&&!e,finished:e?r<=t:r<t,children:[(e?o.length>r+1&&r>t:n?r>t:r>=t)?r+1:null,(e?r<=t:r<t)?a.jsx(u,{className:"checkIcon"}):null,t===r&&n&&!e||r+1===o.length&&e?a.jsx($,{className:"closeIcon"}):null]}),a.jsx(S,{failed:t===r&&n,inProgress:r===t,finished:e?r<=t:r<t,children:p.title}),r<=t||r+1===o.length&&e?a.jsx(R,{finished:e?r<=t:r<t,isFailedAll:e,failed:t===r&&n,className:"timeRecorder",inProgress:r===t,children:p.subTitle?p.subTitle:null}):null]},p.id)]},r))})},y=m.div`
  display: inline-flex;
  padding: ${({theme:e})=>e.pxToRem(4)} ${({theme:e})=>e.pxToRem(40)} ${({theme:e})=>e.pxToRem(68)};
`,b=m.div`
  position: relative;

  .timeRecorder {
    color: ${({theme:e})=>e.palette.ink[80]};
    font-size: ${e=>e.theme.pxToRem(12)} !important;
    ${({theme:e})=>e.typography.h6};
  }
`,f=m.div`
  ${({theme:e})=>e.typography.body1};
  color: ${e=>e.theme.palette.stroke};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 50%;
  width: ${e=>e.theme.pxToRem(20)};
  height: ${e=>e.theme.pxToRem(20)};
  border: 2px solid ${e=>e.theme.palette.black[20]};

  ${({finished:e})=>{if(e)return c`
        border: none;
        color: ${n=>n.theme.palette.primary.main};
        background-color: transparent;
      `}}
  ${({failed:e,isFailedAll:n,finalStep:o})=>{if(e&&!n||n&&o)return c`
        border: none;
        background-color: transparent;
        color: ${s=>s.theme.palette.error.main};
      `}}
  ${({inProgress:e,failed:n})=>{if(e&&!n)return c`
        border: none;
        color: white;
        box-sizing: unset;
        background-color: ${o=>o.theme.palette.primary.main};
        box-shadow: 0 0 0 ${({theme:o})=>o.pxToRem(4)} ${o=>o.theme.palette.primary[10]};
      `}}
  .checkIcon {
    width: ${e=>e.theme.pxToRem(20)};
    height: ${e=>e.theme.pxToRem(20)};
  }

  .closeIcon {
    width: ${e=>e.theme.pxToRem(20)};
    height: ${e=>e.theme.pxToRem(20)};
  }
`,d=m.div`
  margin: ${e=>e.theme.pxToRem(8)};
  border-radius: 1px;
  height: 2px;
  width: ${e=>e.theme.pxToRem(80)};
  background-color: ${e=>e.theme.palette.stroke};

  ${({blue:e,red:n,isFailedAll:o})=>{if(e&&!n)return c`
        background-color: ${s=>s.theme.palette.primary.main};
      `;if(n&&!o)return c`
        background-color: ${s=>s.theme.palette.error.main};
      `;if(n&&e)return c`
        background-color: ${s=>s.theme.palette.primary.main};
      `}}
`,T=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>e.theme.pxToRem(20)};
`,S=m.div`
  white-space: nowrap;
  position: absolute;
  top: ${e=>e.theme.pxToRem(28)};
  left: 50%;
  ${({theme:e})=>e.typography.body1};
  transform: translate(-50%, 0);
`,R=m.div`
  white-space: nowrap;
  position: absolute;
  top: ${e=>e.theme.pxToRem(52)};
  left: 50%;
  ${({theme:e})=>e.typography.body1};
  transform: translate(-50%, 0);
`;h.displayName="ProgressStep";const w=g.memo(h);h.__docgenInfo={description:"",methods:[],displayName:"ProgressStep",props:{current:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},isFailedAll:{required:!1,tsType:{name:"boolean"},description:""},isCurrentFailed:{required:!1,tsType:{name:"boolean"},description:""},steps:{required:!0,tsType:{name:"Array",elements:[{name:"ProgressStepDescriptor"}],raw:"ProgressStepDescriptor[]"},description:""}}};export{w as P};
