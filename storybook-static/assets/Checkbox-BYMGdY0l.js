import{j as a,s as l,A as n}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as s,R as C}from"./index-BjzEU6Zr.js";import{u as $,c as w}from"./useRippleCenter-fyPqct0G.js";import{v as g}from"./v4-8I8R7izr.js";const x=C.forwardRef(({onChange:e,size:o,theme:r,indeterminate:i,checked:t,disabled:p,id:d,label:c,...m},b)=>{const h=s.useMemo(()=>d||`Sapo-CheckBox-${g()}`,[d]),k=s.useMemo(()=>`Sapo-CheckBox__Container-${g()}`,[]),u=s.useMemo(()=>`Sapo-CheckBox__WrapInput-${g()}`,[]);$(u);const v=s.useCallback(f=>{e==null||e(f.target.checked,f)},[e]);return a.jsxs(y,{...m,id:k,children:[a.jsxs(E,{checked:t,checkboxTheme:r,id:u,disabled:p,alone:!c,size:o,children:[a.jsx(B,{ref:b,id:h,checked:t,disabled:p,type:"checkbox",onChange:v,name:m.name,value:m.value}),a.jsx(L,{checked:t,checkboxTheme:r,indeterminate:i,disabled:p})]}),!!c&&a.jsx(R,{disabled:p,htmlFor:h,children:c})]})}),y=l.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: transparent;
  ${({theme:e})=>e.typography.body1};
`,E=l.div`
  width: ${({theme:e,size:o})=>e.pxToRem(o==="large"?30:24)};
  height: ${({theme:e,size:o})=>e.pxToRem(o==="large"?30:24)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  ${()=>w}

  ${({alone:e,checkboxTheme:o,checked:r})=>{if(e)return n`
        &:hover {
          background: ${({theme:i})=>o==="dark"?"#243751":r?i.palette.primary[5]:i.palette.ink[30]};
        }
      `}}
}
`,R=l.label`
  text-align: center;
  margin-left: ${({theme:e})=>e.pxToRem(4)};
  padding: 0;
  display: block;
  color: ${({theme:e,disabled:o})=>o?e.palette.ink[60]:e.palette.ink.main};
  cursor: ${({disabled:e})=>e?void 0:"pointer"};

  ${({disabled:e})=>{if(!e)return n`
        &:hover {
          color: ${o=>o.theme.palette.primary.main};
        }
      `}}
`,B=l.input`
  position: absolute;
  height: ${e=>e.theme.pxToRem(24)};
  width: ${e=>e.theme.pxToRem(24)};
  opacity: 0;
  z-index: 4;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`,L=l.div`
  width: ${e=>e.theme.pxToRem(14)};
  height: ${e=>e.theme.pxToRem(14)};
  background: transparent;
  align-items: center;
  position: relative;
  border: 2px solid ${({theme:e,checkboxTheme:o})=>o==="dark"?"#fff":e.palette.ink[40]};
  border-radius: 2px;
  box-sizing: border-box;

  ${({indeterminate:e,disabled:o,checkboxTheme:r,checked:i})=>{if(o)return e?n`
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.777778 0H13.2222C13.4285 0 13.6263 0.0819442 13.7722 0.227806C13.9181 0.373667 14 0.571498 14 0.777778V13.2222C14 13.4285 13.9181 13.6263 13.7722 13.7722C13.6263 13.9181 13.4285 14 13.2222 14H0.777778C0.571498 14 0.373667 13.9181 0.227806 13.7722C0.0819442 13.6263 0 13.4285 0 13.2222V0.777778C0 0.571498 0.0819442 0.373667 0.227806 0.227806C0.373667 0.0819442 0.571498 0 0.777778 0ZM3.11111 6.22222V7.77778H10.8889V6.22222H3.11111Z' fill='%23DEDFE1'/%3E%3C/svg%3E");
          background-size: 100%;
          background-position: center;
          box-sizing: border-box;
          border: none;
        `:i?n`
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.996 7.556L4.7 6.285L3.3 7.715L6.004 10.362L10.703 5.711L9.297 4.289L5.996 7.556Z' fill='%23DEDFE1'/%3E%3C/svg%3E");
          background-size: ${t=>t.theme.pxToRem(14)};
          background-position: center;
          border-color: ${t=>t.theme.palette.black[20]};
        `:n`
          border-color: ${t=>t.theme.palette.black[20]};
        `;if(e)return n`
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='9' y='11' width='6' height='2' fill='${({theme:t})=>r==="dark"?"%23fff":`%23${t.palette.primary.main.replace("#","")}`}'/%3E%3C/svg%3E");
          background-size: 200%;
          background-position: center;
          box-sizing: border-box;
          border: 2px solid ${({theme:t})=>r==="dark"?"#fff":t.palette.primary.main};
        `;if(i)return n`
          width: ${t=>t.theme.pxToRem(14)};
          height: ${t=>t.theme.pxToRem(14)};
          box-sizing: border-box;
          border: 2px solid ${({theme:t})=>r==="dark"?"#fff":t.palette.primary.main};
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.996 7.556L4.7 6.285L3.3 7.715L6.004 10.362L10.703 5.711L9.297 4.289L5.996 7.556Z' fill='${({theme:t})=>r==="dark"?"%23fff":`%23${t.palette.primary.main.replace("#","")}`}'/%3E%3C/svg%3E");
          background-size: ${t=>t.theme.pxToRem(14)};
          background-position: center;
        `}}
`;x.displayName="CheckBox";const I=s.memo(x);x.__docgenInfo={description:"",methods:[],displayName:"CheckBox"};export{I as C};
