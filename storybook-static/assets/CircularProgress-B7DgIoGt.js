import{j as i,W as g,s as d}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as f}from"./index-BjzEU6Zr.js";function u(e){var t,n,l,o,m;const r=a=>e.size==="small"?20:e.size==="regular"?24:e.size==="large"?36:a,s=a=>a==="primary"?"#0088FF":a==="success"?"#0FD186":a==="error"?"#FF4D4D":a==="warning"?"#FFAE06":a;return i.jsx("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:((t=e.style)==null?void 0:t.width)||r((n=e.style)==null?void 0:n.fontSize),height:((l=e.style)==null?void 0:l.height)||r((o=e.style)==null?void 0:o.fontSize),fontSize:r((m=e.style)==null?void 0:m.fontSize),...e,children:i.jsx("path",{d:"M1.367 7.456a9 9 0 1 1 12.938 10.447",stroke:s(e.color)||"currentColor",strokeWidth:2,strokeMiterlimit:1.414})})}u.__docgenInfo={description:"",methods:[],displayName:"SvgEclipseIcon",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "regular" | "large" | string',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"regular"'},{name:"literal",value:'"large"'},{name:"string"}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "warning" | "success" | "error" | string',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"string"}]},description:""}},composes:["SVGProps"]};const c=f.memo(e=>{const{color:r="primary",size:s="regular",...t}=e;return i.jsx(p,{...t,size:s,color:r})}),y=g`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,p=d(u)`
  height: ${({theme:e,size:r})=>{switch(r){case"regular":return e.pxToRem(20);case"large":return e.pxToRem(36);default:return r}}};
  width: ${({theme:e,size:r})=>{switch(r){case"regular":return e.pxToRem(20);case"large":return e.pxToRem(36);default:return r}}};
  color: ${({theme:e,color:r})=>{if(r==="primary")return e.palette.primary.main;if(r==="secondary")return"#fff"}};
  animation: ${y} 0.5s linear infinite;
`;c.displayName="CircularProgress";c.__docgenInfo={description:"",methods:[],displayName:"CircularProgress",props:{color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"regular" | "large" | string',elements:[{name:"literal",value:'"regular"'},{name:"literal",value:'"large"'},{name:"string"}]},description:""}}};export{c as C,u as S};
