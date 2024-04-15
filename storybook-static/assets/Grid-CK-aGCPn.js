import{j as l,s as d,A as o}from"./styled-components.browser.esm-BiQtg4p9.js";import{r,R as e}from"./index-BjzEU6Zr.js";import{c as t}from"./index-C0fuwcOY.js";const a=e.forwardRef(({...c},i)=>l.jsx(n,{className:c.container?"SapoGrid-container":"SapoGrid-item",...c,ref:i}));a.displayName="Grid";const f=r.memo(a),n=d.div`
  flex-grow: 0;
  box-sizing: border-box;
  max-width: ${({xs:c})=>c===1?"calc(100% / 12)":c===2?"calc(200% / 12)":c===3?"25%":c===4?"calc(400% / 12)":c===5?"calc(500% / 12%)":c===6?"50%":c===7?"calc(700% / 12)":c===8?"calc(800% / 12)":c===9?"75%":c===10?"calc(1000% / 12)":c===11?"calc(1100% / 12)":c===12?"100%":void 0};
  flex-basis: ${({xs:c})=>c===1?"calc(100% / 12)":c===2?"calc(200% / 12)":c===3?"25%":c===4?"calc(400% / 12)":c===5?"calc(500% / 12)":c===6?"50%":c===7?"calc(700% / 12)":c===8?"calc(800% / 12)":c===9?"75%":c===10?"calc(1000% / 12)":c===11?"calc(1100% / 12)":c===12?"100%":void 0};
  ${({container:c})=>c?o`
          display: flex;
          flex-wrap: wrap;
        `:null};
  ${({alignItems:c})=>c?o`
          align-items: ${c&&c!=="stretch"?c:""};
        `:null};
  ${({justify:c})=>c?o`
          justify-content: ${c};
        `:null};
  ${({direction:c})=>c?o`
          flex-direction: ${c};
        `:null};
  ${({wrap:c})=>c?o`
          flex-wrap: ${c};
        `:null};
  width: ${({spacing:c})=>c!==void 0?"calc(100% + "+c*8+"px)":void 0};
  margin-left: ${({spacing:c})=>c!==void 0?"-"+c*8+"px":void 0};
  margin-top: ${({spacing:c})=>c!==void 0?"-"+c*8+"px":void 0};
  & > .SapoGrid-item {
    padding-left: ${({spacing:c})=>c!==void 0?c*8+"px":void 0};
    padding-top: ${({spacing:c})=>c!==void 0?c*8+"px":void 0};
    & > * {
      box-sizing: border-box;
    }
  }
  ${c=>t(c)}
`;a.__docgenInfo={description:"",methods:[],displayName:"Grid"};export{f as G};
