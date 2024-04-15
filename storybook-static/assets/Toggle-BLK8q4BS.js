import{j as a,s,A as n}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as m}from"./index-BjzEU6Zr.js";const l=({onChange:e,checked:t,size:r})=>a.jsxs(p,{size:r||"large",children:[a.jsx(i,{checked:t,onChange:e}),a.jsx(d,{size:r||"large"})]}),p=s.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: transparent;

  ${({size:e})=>{let t=20,r=36;return e==="small"&&(t=16,r=26),n`
      height: ${o=>o.theme.pxToRem(t)};
      width: ${o=>o.theme.pxToRem(r)};
    `}}

  ${({theme:e})=>e.typography.body1};
}
`,i=s.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
`,d=s.span`
  ${({size:e})=>{let t=14,r=36;return e==="small"&&(t=10,r=26),n`
      height: ${o=>o.theme.pxToRem(t)};
      width: ${o=>o.theme.pxToRem(r)};
    `}}
  border-radius: ${e=>e.theme.pxToRem(34)};
  background-color: ${e=>e.theme.palette.ink[30]};
  align-items: center;
  position: absolute;

  &::before {
    position: absolute;
    left: 0;
    content: "";
    bottom: -3px;
    background-color: ${e=>e.theme.palette.ink[60]};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    ${({size:e})=>{let t=20;return e==="small"&&(t=16),n`
        height: ${r=>r.theme.pxToRem(t)};
        width: ${r=>r.theme.pxToRem(t)};
      `}}
  }

  ${i}:checked + &::before {
    background-color: ${e=>e.theme.palette.primary.main};
    ${({size:e})=>{let t=16;return e==="small"&&(t=10),n`
        -webkit-transform: translateX(${t}px);
        -ms-transform: translateX(${t}px);
        transform: translateX(${t}px);
      `}}
  }

  ${i}:checked + & {
    background-color: ${e=>e.theme.palette.primary[20]};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}
`;l.displayName="Toggle";const g=m.memo(l);l.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: any) => void",signature:{arguments:[{type:{name:"any"},name:"event"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"large"'}]},description:""}}};export{g as T};
