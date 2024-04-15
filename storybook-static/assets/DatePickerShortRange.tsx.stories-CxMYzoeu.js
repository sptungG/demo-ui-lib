import{j as l}from"./styled-components.browser.esm-BiQtg4p9.js";import{r}from"./index-BjzEU6Zr.js";import{b as u}from"./AutoCompleteInfinite-C67mg2-f.js";import{B as h}from"./Button-BneYr597.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./CircularProgress-B7DgIoGt.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./index-C0fuwcOY.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import"./Typography-DbQM3xCn.js";import"./ButtonGroup-D15u6qfv.js";import"./Box-CmmyW-oH.js";import"./Checkbox-BYMGdY0l.js";import"./Alert-C2SqmsB-.js";import"./UIComponentProvider-CICpnxab.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./useRippleCenter-fyPqct0G.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./v4-8I8R7izr.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DIVfDX71.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const rt={title:"Components/DatePickerShortRange",component:u.type,argTypes:{}},y=s=>{const[o,n]=r.useState(),[i,p]=r.useState();return l.jsx(u.type,{...s,value:o,secondValue:i,onChange:(m,e)=>{n(m),p(e)}})},t=y.bind({});t.args={label:"Ngày tạo"};t.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301"}};const k=s=>{const[o,n]=r.useState(),[i,p]=r.useState(),m=r.useCallback(({onClick:e,reference:c})=>l.jsx(h.type,{ref:c,variant:"outlined",onClick:e,children:"Chọn"}),[]);return l.jsx(u.type,{...s,value:o,secondValue:i,onChange:(e,c)=>{n(e),p(c)},renderActivator:m})},a=k.bind({});a.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A2301"}};var D,d,g;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date | null>();
  const [lastDate, setLastDate] = useState<Date | null>();
  return <DatePickerShortRange.type {...args} value={date} secondValue={lastDate} onChange={(firstDate, lastDate) => {
    setDate(firstDate);
    setLastDate(lastDate);
  }} />;
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,S,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const [date, setDate] = useState<Date | null>();
  const [lastDate, setLastDate] = useState<Date | null>();
  const renderActivator = useCallback(({
    onClick,
    reference
  }: ActivatorDatePickerProps) => <Button.type ref={reference} variant="outlined" onClick={onClick}>
        Chọn
      </Button.type>, []);
  return <DatePickerShortRange.type {...args} value={date} secondValue={lastDate} onChange={(firstDate, lastDate) => {
    setDate(firstDate);
    setLastDate(lastDate);
  }} renderActivator={renderActivator} />;
}`,...(C=(S=a.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const st=["Basic","Custom"];export{t as Basic,a as Custom,st as __namedExportsOrder,rt as default};
