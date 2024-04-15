import{j as t,s as n,A as s}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as l,R as p}from"./index-BjzEU6Zr.js";import{S as d}from"./CircleCheckOutlineIcon-7m-Hf7Te.js";import{S as u}from"./ErrorOutlineIcon-C0uk5SEn.js";const o=p.forwardRef(({severity:e="success",children:r,...c},i)=>{let a=t.jsx(d,{});return e==="error"&&(a=t.jsx(u,{})),t.jsxs(m,{ref:i,severity:e,...c,children:[a,r]})});o.displayName="Alert";const y=l.memo(o),m=n.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: #fff;
  white-space: pre-wrap;
  width: ${({theme:e})=>e.pxToRem(600)};

  svg {
    color: #fff;
    height: ${({theme:e})=>e.pxToRem(24)};
    width: auto;
    margin-right: ${({theme:e})=>e.pxToRem(4)};
    flex: none;
  }

  ${({theme:e})=>e.typography.body1};
  padding: ${({theme:e})=>e.pxToRem(14)} ${({theme:e})=>e.pxToRem(64)};

  ${({severity:e})=>{switch(e){case"notify":return s`
          background: ${({theme:r})=>r.palette.primary.main};
        `;case"error":return s`
          background: ${({theme:r})=>r.palette.error.textStatus};
        `;case"success":default:return s`
          background: ${({theme:r})=>r.palette.success.textStatus};
        `}}}
`;o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{defaultValue:{value:'"success"',computed:!1},required:!1}}};export{y as A};
