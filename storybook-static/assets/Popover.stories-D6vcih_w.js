import{j as r}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as o}from"./index-BjzEU6Zr.js";import{j as m}from"./AutoCompleteInfinite-C67mg2-f.js";import{B as d}from"./Button-BneYr597.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./CircularProgress-B7DgIoGt.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./index-C0fuwcOY.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import"./Typography-DbQM3xCn.js";import"./ButtonGroup-D15u6qfv.js";import{B as f}from"./Box-CmmyW-oH.js";import"./Checkbox-BYMGdY0l.js";import"./Alert-C2SqmsB-.js";import"./UIComponentProvider-CICpnxab.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./useRippleCenter-fyPqct0G.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./v4-8I8R7izr.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DIVfDX71.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const X={id:"Popover",title:"Components/Popover",component:m,argTypes:{}},g=a=>{const t=o.useRef(null),[l,n]=o.useState(!1),c=o.useCallback(()=>{n(!0)},[]),u=o.useCallback(()=>{n(!1)},[]);return r.jsxs(r.Fragment,{children:[r.jsx(d.type,{ref:t,onClick:c,children:"Open"}),r.jsx(m.type,{...a,reference:t.current,arrow:!0,open:l,onClose:u,children:r.jsx(f,{padding:2,children:"Li Europan lingues es membres del sam familie"})})]})},e=g.bind({});e.storyName="default";e.args={};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521"}};var p,s,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return <>
      <Button.type ref={ref} onClick={handleOpen}>
        Open
      </Button.type>
      <Popover.type {...args} reference={ref.current} arrow open={open} onClose={handleClose}>
        <Box padding={2}>Li Europan lingues es membres del sam familie</Box>
      </Popover.type>
    </>;
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Z=["Basic"];export{e as Basic,Z as __namedExportsOrder,X as default};
