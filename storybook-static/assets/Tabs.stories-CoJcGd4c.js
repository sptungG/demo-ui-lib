import{j as f}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as n}from"./index-BjzEU6Zr.js";import{T as r}from"./Tabs-Bf3FDTM_.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./useRippleCenter-fyPqct0G.js";import"./v4-8I8R7izr.js";const y={id:"Tabs",title:"Components/Tabs",component:r,argTypes:{}},o=u=>{const[a,D]=n.useState([{id:"Tab1",label:"Default Tab1",canDelete:!1},{id:"Tab2",label:"Default Tab2",canDelete:!1},{id:"Tab3",label:"Default Tab3",canDelete:!1},{id:"Tab4",label:"Default Tab4",canDelete:!1},{id:"Tab5",label:"Default Tab5",canDelete:!0},{id:"Tab6",label:"Default Tab6",canDelete:!0},{id:"Tab7",label:"Default Tab7",canDelete:!0},{id:"Tab8",label:"Default Tab8",canDelete:!0},{id:"Tab9",label:"Default Tab9",canDelete:!0},{id:"Tab10",label:"Default Tab100000000000000000000000000000000000000000000",canDelete:!0},{id:"Tab11",label:"Default Tab11",canDelete:!0},{id:"Tab12",label:"Default Tab12",canDelete:!0},{id:"Tab13",label:"Default Tab13",canDelete:!0},{id:"Tab14",label:"Default Tab14",canDelete:!0},{id:"Tab15",label:"Default Tab15",canDelete:!0}]),[i,l]=n.useState(a[a.length-1].id),d=t=>{l("Tab1"),D(a.filter(c=>c.id!==t.id))};return f.jsx(r.type,{...u,tabs:a,value:i,onChange:t=>l(t.id),onDelete:d})},e=o.bind({});e.storyName="default";e.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11148%3A8848"}};var b,s,T;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const [tabs, setTabs] = useState<TabDescriptor[]>([{
    id: "Tab1",
    label: "Default Tab1",
    canDelete: false
  }, {
    id: "Tab2",
    label: "Default Tab2",
    canDelete: false
  }, {
    id: "Tab3",
    label: "Default Tab3",
    canDelete: false
  }, {
    id: "Tab4",
    label: "Default Tab4",
    canDelete: false
  }, {
    id: "Tab5",
    label: "Default Tab5",
    canDelete: true
  }, {
    id: "Tab6",
    label: "Default Tab6",
    canDelete: true
  }, {
    id: "Tab7",
    label: "Default Tab7",
    canDelete: true
  }, {
    id: "Tab8",
    label: "Default Tab8",
    canDelete: true
  }, {
    id: "Tab9",
    label: "Default Tab9",
    canDelete: true
  }, {
    id: "Tab10",
    label: "Default Tab100000000000000000000000000000000000000000000",
    canDelete: true
  }, {
    id: "Tab11",
    label: "Default Tab11",
    canDelete: true
  }, {
    id: "Tab12",
    label: "Default Tab12",
    canDelete: true
  }, {
    id: "Tab13",
    label: "Default Tab13",
    canDelete: true
  }, {
    id: "Tab14",
    label: "Default Tab14",
    canDelete: true
  }, {
    id: "Tab15",
    label: "Default Tab15",
    canDelete: true
  }]);
  const [selected, setSelected] = useState(tabs[tabs.length - 1].id);
  const handleDelete = (tab: TabDescriptor) => {
    setSelected("Tab1");
    setTabs(tabs.filter((object: any) => {
      return object.id !== tab.id;
    }));
  };
  return <Tabs.type {...args} tabs={tabs} value={selected} onChange={tab => setSelected(tab.id)} onDelete={handleDelete} />;
}`,...(T=(s=e.parameters)==null?void 0:s.docs)==null?void 0:T.source}}};const x=["MultipleTabs"];export{e as MultipleTabs,x as __namedExportsOrder,y as default};
