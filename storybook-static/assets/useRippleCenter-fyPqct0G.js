import{r as l}from"./index-BjzEU6Zr.js";import{W as n,A as i}from"./styled-components.browser.esm-BiQtg4p9.js";const u=(e,r)=>{l.useEffect(()=>{var a;let s=!0;const t=document.getElementById(e),m=()=>{const o=document.createElement("div");o.className="ripple",t==null||t.appendChild(o),setTimeout(()=>s&&(t==null?void 0:t.removeChild(o)),2e3)};return(a=document.getElementById(r||e))==null||a.addEventListener("mousedown",m),()=>{var o;s=!1,(o=document.getElementById(r||e))==null||o.removeEventListener("mousedown",m)}},[e,r])},c=n`
  from {
    transform: scale(0);
    opacity: 1.2;
  }
  to {
    transform: scale(1.1);
    opacity: 0;
  }
`,f=i`
  overflow: hidden;
  position: relative;
  .ripple {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    border-radius: 50%;
    background-color: ${e=>e.theme.palette.primary[60]};
    z-index: 0;
    animation: ${c} 0.8s forwards;
  }
`;export{f as c,u};
