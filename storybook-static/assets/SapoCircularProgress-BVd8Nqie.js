import{j as r,W as n,s as e}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as l,R as p}from"./index-BjzEU6Zr.js";import{S as c,a as m,b as d}from"./SapoIcon-Ong2Henh.js";import{c as f}from"./index-C0fuwcOY.js";const t=p.forwardRef(({variant:o="primary",children:s},a)=>r.jsxs(g,{ref:a,variant:o,children:[o==="primary"?r.jsx(x,{}):r.jsx(u,{}),r.jsx(c,{size:"large"})]})),i=n`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,g=e.div`
  height: ${({theme:o})=>o.pxToRem(80)};
  width: ${({theme:o})=>o.pxToRem(80)};
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
  z-index: 9;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    bottom: 5px;
    right: 5px;
    border-radius: 50%;
    background: ${({variant:o,theme:s})=>s.palette[o||"primary"].gradient};
  }

  ${o=>f(o)}
`,x=e(m)`
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${i} 0.8s linear infinite;
`,u=e(d)`
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${i} 0.8s linear infinite;
`;t.displayName="SapoCircularProgress";const j=l.memo(t);t.__docgenInfo={description:"",methods:[],displayName:"SapoCircularProgress",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1}}};export{j as S};
