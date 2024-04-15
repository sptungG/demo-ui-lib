import{j as l}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as c}from"./index-BjzEU6Zr.js";import{P as m}from"./AutoCompleteInfinite-C67mg2-f.js";import"./index-C0fuwcOY.js";import"./Button-BneYr597.js";import"./CircularProgress-B7DgIoGt.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./v4-8I8R7izr.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import"./useRippleCenter-fyPqct0G.js";import"./Typography-DbQM3xCn.js";import"./UIComponentProvider-CICpnxab.js";import"./Box-CmmyW-oH.js";import"./index-DIVfDX71.js";import"./ButtonGroup-D15u6qfv.js";import"./Checkbox-BYMGdY0l.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./Alert-C2SqmsB-.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const W={id:"Pagination",title:"Components/Pagination",component:m,argTypes:{}},u=a=>{const[i,p]=c.useState({id:1,limit:20}),n=(s,g)=>p(d=>({...d,id:s,limit:g}));return l.jsx(m.type,{...a,total:1e4,limit:i.limit,currentPage:i.id,onChange:n})},t=u.bind({});t.storyName="default";t.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521"}};var r,e,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [page, setPage] = useState({
    id: 1,
    limit: 20
  });
  const handlePageChange = (id: number, limit: number) => setPage(prev => ({
    ...prev,
    id: id,
    limit: limit
  }));
  return <Pagination.type {...args} total={10000} limit={page.limit} currentPage={page.id} onChange={handlePageChange} />;
}`,...(o=(e=t.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const X=["Basic"];export{t as Basic,X as __namedExportsOrder,W as default};
