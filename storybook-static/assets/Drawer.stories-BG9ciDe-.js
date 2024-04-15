import{j as t}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as w}from"./index-BjzEU6Zr.js";import{B as o}from"./Button-BneYr597.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./CircularProgress-B7DgIoGt.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./index-C0fuwcOY.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import"./Typography-DbQM3xCn.js";import{c as a,d as l,e as m,f as c,T as g}from"./AutoCompleteInfinite-C67mg2-f.js";import"./ButtonGroup-D15u6qfv.js";import"./Box-CmmyW-oH.js";import"./Checkbox-BYMGdY0l.js";import"./Alert-C2SqmsB-.js";import{u as n}from"./UIComponentProvider-CICpnxab.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./useRippleCenter-fyPqct0G.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./v4-8I8R7izr.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DIVfDX71.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const et={id:"Drawer",title:"Components/Drawer",component:a.type,subcomponents:{DrawerTitle:l,DrawerContent:m,DrawerActions:c},argTypes:{}},C=u=>{const{openModal:d}=n(),D=()=>{const{closeModal:r}=n(),[y,x]=w.useState("");return t.jsxs(a.type,{...u,children:[t.jsx(l.type,{divider:!0,children:"Bộ lọc"}),t.jsx(m.type,{children:t.jsx(g.type,{label:"Họ và tên",value:y,onChange:x})}),t.jsxs(c.type,{children:[t.jsx(o.type,{destruction:!0,onClick:()=>r({clear:!0}),variant:"outlined",children:"Xóa bộ lọc"}),t.jsx(o.type,{onClick:()=>r({ok:!0}),children:"Lọc"})]})]})};return t.jsx(o.type,{onClick:()=>d(D).result.then(r=>console.log(r)),children:"Open"})},e=C.bind({});e.args={};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474"}};var s,i,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: DrawerProps) => {
  const {
    openModal
  } = useModal();
  const DrawerDoSomething = () => {
    const {
      closeModal
    } = useModal();
    const [text, setText] = useState("");
    return <Drawer.type {...args}>
        <DrawerTitle.type divider>Bộ lọc</DrawerTitle.type>
        <DrawerContent.type>
          <TextField.type label="Họ và tên" value={text} onChange={setText} />
        </DrawerContent.type>
        <DrawerActions.type>
          <Button.type destruction onClick={() => closeModal({
          clear: true
        })} variant="outlined">
            Xóa bộ lọc
          </Button.type>
          <Button.type onClick={() => closeModal({
          ok: true
        })}>Lọc</Button.type>
        </DrawerActions.type>
      </Drawer.type>;
  };
  return <Button.type onClick={() => openModal(DrawerDoSomething).result.then(rs => console.log(rs))}>Open</Button.type>;
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const rt=["Basic"];export{e as Basic,rt as __namedExportsOrder,et as default};
