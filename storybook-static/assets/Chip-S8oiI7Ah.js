import{j as o,s as a,A as t}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as m,R as x}from"./index-BjzEU6Zr.js";import{I as h}from"./IconButton-C_jwIMBT.js";import{S as $}from"./ClearIcon-CTCte1z_.js";import{g as f,c as g}from"./index-C0fuwcOY.js";const l=x.forwardRef(({variant:e="default",label:r,size:s="regular",startIcon:p,onDelete:n,width:c,...i},u)=>{let d=i.endIcon;return!i.endIcon&&n&&(d=o.jsx(y,{onClick:n,size:"extra-small",color:"primary",variant:"text",children:o.jsx(b,{size:s})})),o.jsxs(w,{...i,_width:c,ref:u,variant:e,size:s,children:[p,o.jsx(R,{variant:e,size:s,children:r}),d]})});l.displayName="Chip";const j=m.memo(l),y=a(h)`
  margin: 0 ${({theme:e})=>e.pxToRem(4)};
  padding: 0;
`,b=a($)`
  ${({size:e})=>{switch(e){case"small":return t`
          width: ${({theme:r})=>r.pxToRem(12)};
          height: ${({theme:r})=>r.pxToRem(12)};
        `;default:return t`
          width: ${({theme:r})=>r.pxToRem(16)};
          height: ${({theme:r})=>r.pxToRem(16)};
        `}}}
`,R=a.span`
  padding: 0 ${({theme:e})=>e.pxToRem(8)};
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${({size:e})=>{switch(e){case"small":return t`
          ${({theme:r})=>r.typography.body2}
        `;default:return t`
          ${({theme:r})=>r.typography.body1}
        `}}}

  ${({variant:e})=>f(e)};
`,w=a.div`
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding: ${({theme:e})=>e.pxToRem(4)};
  border-radius: ${({theme:e})=>e.pxToRem(16)};
  width: ${({_width:e,theme:r})=>e?isNaN(+e)?e:r.pxToRem(+e):void 0};
  max-width: ${({maxWidth:e,theme:r})=>e?isNaN(+e)?e:r.pxToRem(+e):void 0};

  ${({size:e})=>{switch(e){case"small":return t`
          height: ${({theme:r})=>r.pxToRem(24)};
        `;default:return t`
          height: ${({theme:r})=>r.pxToRem(32)};
        `}}}

  ${({variant:e})=>{switch(e){case"error":case"warning":case"success":case"extra":case"primary":return t`
          border: 1px solid ${({theme:r})=>r.palette[e][40]};
          background-color: ${({theme:r})=>r.palette[e][5]};
        `;case"inactive":return t`
          border: 1px solid transparent;
          background-color: ${({theme:r})=>r.palette.ink[5]};
        `;case"disabled":return t`
          border: 1px solid #cfd1d3;
          background-color: ${({theme:r})=>r.palette.ink[5]};
        `;default:return t`
          border: 1px solid transparent;
          background-color: ${({theme:r})=>r.palette.primary[15]};
        `}}}

  ${({onClick:e})=>e?t`
          cursor: pointer;

          &:hover,
          &:focus {
            border: 1px solid ${({theme:r})=>r.palette.primary.main};
          }
        `:null}

  ${e=>g(e)}
`;l.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"regular"',computed:!1},required:!1}}};export{j as C};
