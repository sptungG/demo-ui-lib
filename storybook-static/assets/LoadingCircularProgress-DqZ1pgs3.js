import{j as n,W as s,s as i}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as o}from"./index-BjzEU6Zr.js";const a=o.memo(r=>{const{size:e="lg",...t}=r;return n.jsx(m,{...t,size:e})}),l=s`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`,c=s`
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
`,m=i.div`
  height: ${({theme:r,size:e})=>{switch(e){case"xs":return r.pxToRem(12);case"sm":return r.pxToRem(16);case"md":return r.pxToRem(24);case"lg":return r.pxToRem(48);case"xl":default:return r.pxToRem(56)}}};
  width: ${({theme:r,size:e})=>{switch(e){case"xs":return r.pxToRem(12);case"sm":return r.pxToRem(16);case"md":return r.pxToRem(24);case"lg":return r.pxToRem(48);case"xl":default:return r.pxToRem(56)}}};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: ${({theme:r,size:e})=>{switch(e){case"xs":return r.pxToRem(.88);case"sm":return r.pxToRem(1.4);case"md":return r.pxToRem(2.45);case"lg":return r.pxToRem(3.5);case"xl":default:return r.pxToRem(4)}}}
    solid;
  border-color: ${({theme:r})=>r.palette.primary.main} ${({theme:r})=>r.palette.primary.main} transparent
    transparent;
  box-sizing: border-box;
  animation: ${c} 1s linear infinite;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: ${({theme:r,size:e})=>{switch(e){case"xs":return r.pxToRem(.44);case"sm":return r.pxToRem(.7);case"md":return r.pxToRem(1.225);case"lg":return r.pxToRem(1.75);case"xl":default:return r.pxToRem(2)}}};
    border-radius: 50%;
    transform-origin: center center;
    border: ${({theme:r,size:e})=>{switch(e){case"xs":return r.pxToRem(.88);case"sm":return r.pxToRem(1.4);case"md":return r.pxToRem(2.45);case"lg":return r.pxToRem(3.5);case"xl":default:return r.pxToRem(4)}}}
      solid;
    animation: ${l} 0.5s linear infinite;
    border-color: transparent transparent ${({theme:r})=>r.palette.success.main}
      ${({theme:r})=>r.palette.success.main};
  }
`;a.displayName="LoadingCircularProgress";const x=o.memo(a);a.__docgenInfo={description:"",methods:[],displayName:"LoadingCircularProgress",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:""}}};export{x as L};
