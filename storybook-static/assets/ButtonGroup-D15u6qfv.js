import{j as a,s as u,A as e}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as h,R as o}from"./index-BjzEU6Zr.js";const d=o.forwardRef(({size:i,destruction:t,variant:r,children:n,...c},l)=>{const p=o.Children.map(n,s=>o.isValidElement(s)?o.cloneElement(s,{variant:r,size:i,destruction:t}):s);return a.jsx(m,{ref:l,destruction:t,variant:r,children:p})}),m=u.div`
  display: inline-flex;
  vertical-align: middle;

  & > * {
    position: relative;
    border-radius: 0;

    :first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    :last-child {
      border-right-width: 1px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }

  ${({variant:i,destruction:t})=>{switch(i){case"outlined":return e`
          & > * {
            :first-child {
              border-right: none;
            }
          }
        `;case"normal":return e`
          & > * {
            :first-child {
              border-right: none;
            }
          }
        `;default:return t?e`
            & > * {
              :first-child {
                border-right: 1px solid ${r=>r.theme.palette.error[80]};
              }
            }
          `:e`
          & > * {
            :first-child {
              border-right: 1px solid ${r=>r.theme.palette.primary[80]};
            }
          }
        `}}}
`;d.displayName="ButtonGroup";const b=h.memo(d);d.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};export{b as B};
