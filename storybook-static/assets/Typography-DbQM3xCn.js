import{j as i,s as l,A as d}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as y,R as n}from"./index-BjzEU6Zr.js";import{g as m,c as u}from"./index-C0fuwcOY.js";const o=n.forwardRef(({variant:e="body1",fontWeight:a,align:r="inherit",width:s,...p},t)=>i.jsx(g,{...p,ref:t,align:r,fontWeight:a,variant:e,_width:s})),g=l.p`
  box-sizing: border-box;
  ${e=>{var a;return(a=e.theme.typography)==null?void 0:a[(e==null?void 0:e.variant)||"body1"]}};
  ${({color:e})=>m(e)}
  text-align: ${e=>e.align};
  width: ${({_width:e,theme:a})=>e?isNaN(+e)?e:a.pxToRem(+e):void 0};
  min-width: ${({minWidth:e,theme:a})=>e?isNaN(+e)?e:a.pxToRem(+e):void 0};
  max-width: ${({maxWidth:e,theme:a})=>e?isNaN(+e)?e:a.pxToRem(+e):void 0};
  font-weight: ${({fontWeight:e})=>e==="light"?300:e==="regular"?400:e==="medium"?500:e==="bold"?700:void 0};
  ${({noWrap:e})=>e?d`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `:null}
  ${e=>u(e)}
`;o.displayName="Typography";const x=y.memo(o);o.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{defaultValue:{value:'"body1"',computed:!1},required:!1},align:{defaultValue:{value:'"inherit"',computed:!1},required:!1}}};export{x as T};
