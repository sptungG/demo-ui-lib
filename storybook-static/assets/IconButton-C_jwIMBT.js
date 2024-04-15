import{j as s,s as d,A as o}from"./styled-components.browser.esm-BiQtg4p9.js";import{R as f,r as c}from"./index-BjzEU6Zr.js";import{u as h,c as g}from"./useRippleCenter-fyPqct0G.js";import{c as $}from"./index-C0fuwcOY.js";import{C as b}from"./CircularProgress-B7DgIoGt.js";import{v as y}from"./v4-8I8R7izr.js";const n=f.forwardRef(({id:a,isLoading:r,color:t="primary",size:e="regular",variant:l="contained",children:m,...p},u)=>{const i=c.useMemo(()=>a||`Sapo-IconButton-${y()}`,[a]);return h(i),s.jsx(k,{...p,id:i,ref:u,variant:l,color:t,size:e,isLoading:r,children:r?s.jsx(b,{}):m})}),k=d.button`
  display: inline-flex;
  flex: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  ${()=>g}
  &:focus-visible {
    outline: none;
  }

  ${({size:a})=>{let r=36;switch(a){case"extra-small":r=16;break;case"small":r=24;break;case"medium":r=30;break;case"regular":r=36;break;case"large":r=48;break;default:r=a&&!isNaN(+a)?+a:36;break}return o`
      &:after {
        padding-top: ${t=>t.theme.pxToRem(r)};
        padding-left: ${t=>t.theme.pxToRem(r)};
      }

      height: ${t=>t.theme.pxToRem(r)};
      width: ${t=>t.theme.pxToRem(r)};
      padding: ${t=>t.theme.pxToRem(r/4)};
    `}}

  ${({color:a,variant:r,disabled:t})=>{if(r==="contained"){if(t)return o`
          background: #d3d5d7;
          color: ${e=>e.theme.palette.ink[60]};
        `;switch(a){case"secondary":return o`
            color: ${e=>e.theme.palette.primary.main};
            background: ${e=>e.theme.palette.primary[5]};

            &:hover {
              color: #fff;
              background: ${e=>e.theme.palette.primary.main};
            }
          `;case"primary":default:return o`
            color: #fff;
            background: ${e=>e.theme.palette.primary.main};

            &:hover {
              background: ${e=>e.theme.palette.primary[80]};
            }
          `}}else if(r==="text"){if(t)return o`
          color: ${e=>e.theme.palette.text.disabled};
          background: transparent;
        `;switch(a){case"secondary":return o`
            color: ${e=>e.theme.palette.primary.main};
            background: #fff;

            &:hover {
              color: #fff;
              background: ${e=>e.theme.palette.ink[30]};
            }
          `;case"primary":default:return o`
            color: ${e=>e.theme.palette.primary.main};
            background: transparent;

            &:hover {
              background: ${e=>e.theme.palette.primary[40]};
            }
          `}}}}

  ${a=>$(a)}
`;n.displayName="IconButton";const w=c.memo(n);n.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{color:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"regular"',computed:!1},required:!1},variant:{defaultValue:{value:'"contained"',computed:!1},required:!1}}};export{w as I};
