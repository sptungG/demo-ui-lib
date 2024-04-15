import{j as t}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as o}from"./index-BjzEU6Zr.js";import{B as s}from"./Box-CmmyW-oH.js";import{B as C}from"./Button-BneYr597.js";import{u as f}from"./UIComponentProvider-CICpnxab.js";import{R as S,a}from"./RadioGroup-Ztn1OArN.js";import{k as u}from"./AutoCompleteInfinite-C67mg2-f.js";import{T as B}from"./Typography-DbQM3xCn.js";import"./index-C0fuwcOY.js";import"./CircularProgress-B7DgIoGt.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./v4-8I8R7izr.js";import"./IconButton-C_jwIMBT.js";import"./useRippleCenter-fyPqct0G.js";import"./index-DIVfDX71.js";import"./Chip-S8oiI7Ah.js";import"./ButtonGroup-D15u6qfv.js";import"./Checkbox-BYMGdY0l.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./Alert-C2SqmsB-.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const ie={id:"SettingColumn",title:"Components/SettingColumn",component:u,argTypes:{}},E=p=>{const[d,c]=o.useState(r),{openModal:h}=f(),[g,T]=o.useState("1");let x=Object.entries(d).map(([e,y])=>({key:e,label:b[e],disable:e==="id"||e==="name",defaultSelected:r[e],selected:y}));return t.jsx(C,{onClick:()=>{h(u,{...p,columnGroups:j,columns:x,additionalInfo:t.jsx(s,{children:t.jsxs(s,{minHeight:"34px",padding:"0px",display:"grid",alignItems:"center",children:[t.jsx(B,{children:"Thứ tự hiển thị hàng hóa:"}),t.jsxs(S.type,{value:g,onChange:e=>{T(e)},direction:"row",children:[t.jsx(a.type,{value:"1",label:"Thêm sau lên trên"}),t.jsx(a.type,{value:"2",label:"Thêm sau xuống dưới"})]})]})})}).result.then(e=>{c(e)})},children:"Setting column"})},n=E.bind({});n.storyName="default";n.args={sortable:!0,title:"Tùy chỉnh hiển thị"};n.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521"}};const r={id:!0,name:!0,phone:!0,email:!0,address:!1,area:!1,id_customer:!0,name_customer:!1,phone_customer:!1},b={id:"Mã ID",name:"Tên",phone:"Số điện thoại",email:"Email",address:"Địa chỉ",area:"Khu vực",id_customer:"Mã khách hàng",name_customer:"Tên khách hàng",phone_customer:"SĐT khách hàng"},j=[{label:"Thông tin đơn hàng",columnKeys:["id","name","phone","email","address","area"]},{label:"Thông tin khách",columnKeys:["id_customer","name_customer","phone_customer"]}];var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const [settingColumns, setSettingColumns] = useState<Record<string, boolean>>(SettingColumnsDefault);
  const {
    openModal
  } = useModal();
  const [addNewToTop, setAddNewToTop] = useState<string>("1");
  let columns = Object.entries(settingColumns).map(([key, value]) => ({
    key: key,
    label: ColumnNames[key],
    disable: key === "id" || key === "name",
    defaultSelected: SettingColumnsDefault[key],
    selected: value
  }));
  return <Button onClick={() => {
    openModal(SettingColumn, {
      ...args,
      columnGroups: getColumnsGroup,
      columns: columns,
      additionalInfo: <Box>
              <Box minHeight={"34px"} padding="0px" display={"grid"} alignItems={"center"}>
                <Typography>Thứ tự hiển thị hàng hóa:</Typography>
                <RadioGroup.type value={addNewToTop} onChange={(value: any) => {
            setAddNewToTop(value);
          }} direction="row">
                  <Radio.type value="1" label="Thêm sau lên trên" />
                  <Radio.type value="2" label="Thêm sau xuống dưới" />
                </RadioGroup.type>
              </Box>
            </Box>
    }).result.then(columns => {
      setSettingColumns(columns);
    });
  }}>
      Setting column
    </Button>;
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const me=["Basic"];export{n as Basic,me as __namedExportsOrder,ie as default};
