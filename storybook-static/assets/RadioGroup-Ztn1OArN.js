import{j as n,s as r,A as a}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as u,R as m}from"./index-BjzEU6Zr.js";import{c as f,l as C,f as R}from"./index-C0fuwcOY.js";import{v as $}from"./v4-8I8R7izr.js";const g=m.forwardRef(({value:e,checked:i,disabled:d,id:l,label:s,...t},c)=>{const o=u.useMemo(()=>l||`Sapo-Radio-${$()}`,[l]);return n.jsxs(v,{margin:t.margin,ml:t.ml,mr:t.mr,mb:t.mb,mt:t.mt,mx:t.mx,my:t.my,padding:t.padding,pl:t.pl,pr:t.pr,pb:t.pb,pt:t.pt,px:t.px,py:t.py,children:[n.jsxs(b,{children:[n.jsx(h,{id:o,ref:c,checked:i,disabled:d,onChange:()=>{var x;return(x=t==null?void 0:t.onChange)==null?void 0:x.call(t,e)}}),n.jsx(w,{disabled:d})]}),!!s&&n.jsx(y,{disabled:d,htmlFor:o,children:s})]})}),v=r.div`
  display: inline-flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  background-color: transparent;
  height: ${e=>e.theme.pxToRem(24)};

  ${({theme:e})=>e.typography.body1};
  ${e=>f(e)}
}
`,b=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${e=>e.theme.pxToRem(24)};
  width: ${e=>e.theme.pxToRem(24)};
  overflow: hidden;
`,y=r.label`
  text-align: center;
  margin-left: ${e=>e.theme.pxToRem(8)};
  color: ${e=>e.theme.palette.ink.main};
  cursor: pointer;

  ${({disabled:e})=>e?a`
        color: ${i=>i.theme.palette.ink[60]};
        cursor: default;
      `:a`
        &:hover {
          color: ${i=>i.theme.palette.primary.main};
        }
      `}
`,h=r.input.attrs(e=>({type:"radio",disabled:e.disabled}))`
  position: absolute;
  width: ${e=>e.theme.pxToRem(24)};
  height: ${e=>e.theme.pxToRem(24)};
  margin: 0;
  opacity: 0;
  z-index: 1;
  ${({disabled:e})=>e?a`
        cursor: default;
      `:a`
        cursor: pointer;
      `}
`,w=r.div`
  width: ${e=>e.theme.pxToRem(16)};
  height: ${e=>e.theme.pxToRem(16)};
  background: transparent;
  align-items: center;
  position: relative;
  border: 2px solid ${e=>e.theme.palette.ink[40]};
  box-sizing: border-box;
  border-radius: 50%;

  ${h}:checked + & {
    border: none;
    width: ${e=>e.theme.pxToRem(24)};
    height: ${e=>e.theme.pxToRem(24)};
    box-sizing: border-box;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.4286 12C15.4286 13.8935 13.8935 15.4286 12 15.4286C10.1065 15.4286 8.57143 13.8935 8.57143 12C8.57143 10.1065 10.1065 8.57143 12 8.57143C13.8935 8.57143 15.4286 10.1065 15.4286 12Z' fill='%230088FF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 17.7143C15.1559 17.7143 17.7143 15.1559 17.7143 12C17.7143 8.84409 15.1559 6.28571 12 6.28571C8.84409 6.28571 6.28571 8.84409 6.28571 12C6.28571 15.1559 8.84409 17.7143 12 17.7143Z' fill='%230088FF'/%3E%3C/svg%3E");
    background-size: 100%;
    background-position: center;
  }

  ${({disabled:e})=>{if(e)return a`
        border-color: ${i=>i.theme.palette.black[20]};
      `}}
  ${h}:checked:disabled + & {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.4286 12C15.4286 13.8935 13.8935 15.4286 12 15.4286C10.1065 15.4286 8.57143 13.8935 8.57143 12C8.57143 10.1065 10.1065 8.57143 12 8.57143C13.8935 8.57143 15.4286 10.1065 15.4286 12Z' fill='%23DEDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 17.7143C15.1559 17.7143 17.7143 15.1559 17.7143 12C17.7143 8.84409 15.1559 6.28571 12 6.28571C8.84409 6.28571 6.28571 8.84409 6.28571 12C6.28571 15.1559 8.84409 17.7143 12 17.7143Z' fill='%23DEDFE1'/%3E%3C/svg%3E");
    background-size: 100%;
    width: ${e=>e.theme.pxToRem(24)};
    height: ${e=>e.theme.pxToRem(24)};
    background-position: center;
  }
}
`;g.displayName="Radio";const S=u.memo(g);g.__docgenInfo={description:"",methods:[],displayName:"Radio"};const p=m.forwardRef(({direction:e="column",value:i,onChange:d,children:l,...s},t)=>{const c=m.Children.map(l,o=>m.isValidElement(o)?m.cloneElement(o,{checked:C.isEqual(o.props.value,i),onChange:d}):o);return n.jsx(E,{...s,ref:t,direction:e,children:c})}),E=r.div`
  display: inline-grid;
  vertical-align: middle;

  ${e=>R(e)}

  ${({direction:e})=>{if(e==="row")return a`
        display: inline-flex;
      `}}
`;p.displayName="RadioGroup";const F=u.memo(p);p.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{direction:{defaultValue:{value:'"column"',computed:!1},required:!1}}};export{F as R,S as a};
