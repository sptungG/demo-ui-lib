import{j as a,s as t,A as r}from"./styled-components.browser.esm-BiQtg4p9.js";import{R as x,r as d}from"./index-BjzEU6Zr.js";import{a as p,c,b as i,d as m,e as n}from"./index-C0fuwcOY.js";const e=x.forwardRef(({...s},o)=>a.jsx($,{...s,ref:o})),$=t.div`
  background: #fff;
  display: ${({display:s})=>s};
  align-items: ${({alignItems:s})=>s};
  justify-content: ${({justifyContent:s})=>s};

  ${({shadow:s})=>{switch(s){case"large":return r`
          box-shadow: ${({theme:o})=>o.pxToRem(4)} ${({theme:o})=>o.pxToRem(4)}
            ${({theme:o})=>o.pxToRem(20)} rgba(168, 168, 168, 0.5);
          border-radius: 3px;
        `;case"regular":return r`
          box-shadow: 0 ${({theme:o})=>o.pxToRem(8)} ${({theme:o})=>o.pxToRem(16)} rgba(168, 168, 168, 0.25);
          border-radius: 3px;
        `;case"small":return r`
          box-shadow: 0 2px ${({theme:o})=>o.pxToRem(4)} rgba(168, 168, 168, 0.25);
          border-radius: 3px;
        `;default:return null}}}

  ${s=>p(s)}

  ${s=>c(s)}

  ${s=>i(s)}

  ${s=>m(s)}

  ${s=>n(s)}
`;e.displayName="Box";const f=d.memo(e);e.__docgenInfo={description:"",methods:[],displayName:"Box"};export{f as B};
