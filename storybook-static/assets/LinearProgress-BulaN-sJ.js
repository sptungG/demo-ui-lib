import{j as r,s as o}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as i}from"./index-BjzEU6Zr.js";const s=({value:e,...t})=>r.jsx(n,{...t,children:r.jsx(a,{children:r.jsx(l,{style:{transform:`translateX(${e-100}%)`}})})}),n=o.div`
  display: inline-flex;
  width: 100%;
`,a=o.span`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${e=>e.theme.pxToRem(4)};
  background-color: ${e=>e.theme.palette.primary[20]};
`,l=o.span`
  display: block;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${e=>e.theme.palette.primary.main};
  transform-origin: left center;
  transition: transform 0.4s linear 0s;
`;s.displayName="LinearProgress";const m=i.memo(s);s.__docgenInfo={description:"",methods:[],displayName:"LinearProgress",props:{value:{required:!0,tsType:{name:"number"},description:""}}};export{m as L};
