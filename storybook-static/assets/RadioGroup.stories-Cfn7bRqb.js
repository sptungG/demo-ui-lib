import{j as a}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as n}from"./index-BjzEU6Zr.js";import{R as i,a as o}from"./RadioGroup-Ztn1OArN.js";import"./index-C0fuwcOY.js";import"./v4-8I8R7izr.js";const g={id:"RadioGroup",title:"Components/RadioGroup",component:i.type,subcomponents:{Radio:o},argTypes:{}},m=d=>{const[p,u]=n.useState("Radio No1");return a.jsxs(i.type,{...d,value:p,onChange:t=>{console.log(t),u(t)},children:[a.jsx(o.type,{label:"Item 1",value:"Radio No1",checked:!0,disabled:!0}),a.jsx(o.type,{label:"Item 2",value:"Radio No2"}),a.jsx(o.type,{label:"Item 3",value:"Radio No3"}),a.jsx(o.type,{label:"Disabled Item",value:"Radio No4",disabled:!0})]})},e=m.bind({});e.storyName="default";e.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9990"}};var s,l,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [value, setValue] = useState("Radio No1");
  return <RadioGroup.type {...args} value={value} onChange={value => {
    console.log(value);
    setValue(value);
  }}>
      <Radio.type label="Item 1" value="Radio No1" checked disabled />
      <Radio.type label="Item 2" value="Radio No2" />
      <Radio.type label="Item 3" value="Radio No3" />
      <Radio.type label="Disabled Item" value="Radio No4" disabled />
    </RadioGroup.type>;
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const N=["Basic"];export{e as Basic,N as __namedExportsOrder,g as default};
