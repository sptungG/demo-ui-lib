import{j as i}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as s}from"./index-BjzEU6Zr.js";import{g as m}from"./AutoCompleteInfinite-C67mg2-f.js";import"./Button-BneYr597.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./CircularProgress-B7DgIoGt.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./index-C0fuwcOY.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import{T as l}from"./Typography-DbQM3xCn.js";import"./ButtonGroup-D15u6qfv.js";import"./Box-CmmyW-oH.js";import"./Checkbox-BYMGdY0l.js";import"./Alert-C2SqmsB-.js";import"./UIComponentProvider-CICpnxab.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./useRippleCenter-fyPqct0G.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./v4-8I8R7izr.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DIVfDX71.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const ce={id:"Dropdown",title:"Components/Dropdown",component:m,argTypes:{}},V=t=>{const[n,a]=s.useState({id:8,name:"Sacombank"});return i.jsx(m.type,{label:"Thanh toán dự kiến",placeholder:"Chọn thanh toán dự kiến",...t,onChange:a,value:n,width:"200px",popperWidth:"500px",renderOption:e=>e.name,options:[{id:1,name:"Tiền mặt"},{id:2,name:"Ví Shopee"},{id:3,name:"VNPAY-QR"},{id:4,name:"Zalo Pay"},{id:5,name:"Vietcombank"},{id:6,name:"VietinBank"},{id:7,name:"SHBC"},{id:8,name:"Sacombank"},{id:9,name:"Techcombank"}]})},o=V.bind({});o.args={};o.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521"}};const f=t=>{const[n,a]=s.useState({id:1,percentage:"10%",text:"Thuế đầu vào"});return i.jsx(m.type,{...t,variant:"standard",onChange:a,value:n,renderValue:e=>e.percentage,width:"100px",popperWidth:"200px",renderOption:e=>i.jsxs("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"},children:[i.jsx(l,{children:e.text}),i.jsx(l,{children:e.percentage})]}),options:[{id:1,percentage:"10%",text:"Thuế đầu vào"},{id:2,percentage:"20%",text:"Thuế đầu vào"},{id:3,percentage:"10%",text:"Thuế đầu vào"},{id:4,percentage:"0%",text:"Không áp dụng thuế"},{id:5,percentage:"5%",text:"Thuế đầu vào"}]})},r=f.bind({});r.args={};r.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521"}};const v=t=>{const[n,a]=s.useState([]),e=[{id:1,name:"Tiền mặt"},{id:2,name:"Ví Shopee"},{id:3,name:"VNPAY-QR"},{id:4,name:"Zalo Pay"},{id:5,name:"Vietcombank"},{id:6,name:"VietinBank"},{id:7,name:"SHBC"},{id:8,name:"Sacombank"},{id:9,name:"Techcombank"}];return i.jsx(m.type,{label:"Thanh toán dự kiến",placeholder:"Chọn thanh toán dự kiến",...t,multiple:!0,value:n,onChange:a,renderOption:c=>c.name,disabledSelectAll:!0,tooltipLabel:"Chọn phương thức thanh toán",options:e,disabledOptions:n.length===4?e.filter(c=>!n.find(w=>w.id===c.id)):[]})},d=v.bind({});d.args={};d.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521"}};const D=t=>{const[n,a]=s.useState([{id:1,name:"Tiền mặt"}]);return i.jsx(m.type,{label:"Thanh toán dự kiến",placeholder:"Chọn thanh toán dự kiến",...t,multiple:!0,value:n,onChange:a,renderOption:e=>e.name,inline:!0,options:[{id:1,name:"Tiền mặt"},{id:2,name:"Ví Shopee"},{id:3,name:"VNPAY-QR"},{id:4,name:"Zalo Pay"},{id:5,name:"Vietcombank"},{id:6,name:"VietinBank"},{id:7,name:"SHBC"},{id:8,name:"Sacombank"},{id:9,name:"Techcombank"}]})},p=D.bind({});p.args={};p.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521"}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<any>({
    id: 8,
    name: "Sacombank"
  });
  return <Dropdown.type label="Thanh toán dự kiến" placeholder="Chọn thanh toán dự kiến" {...args} onChange={setSelected} value={selected} width={"200px"} popperWidth={"500px"} renderOption={e => e.name} options={[{
    id: 1,
    name: "Tiền mặt"
  }, {
    id: 2,
    name: "Ví Shopee"
  }, {
    id: 3,
    name: "VNPAY-QR"
  }, {
    id: 4,
    name: "Zalo Pay"
  }, {
    id: 5,
    name: "Vietcombank"
  }, {
    id: 6,
    name: "VietinBank"
  }, {
    id: 7,
    name: "SHBC"
  }, {
    id: 8,
    name: "Sacombank"
  }, {
    id: 9,
    name: "Techcombank"
  }]} />;
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var E,x,S;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<any>({
    id: 1,
    percentage: "10%",
    text: "Thuế đầu vào"
  });
  return <Dropdown.type {...args} variant="standard" onChange={setSelected} value={selected} renderValue={selected => selected.percentage} width={"100px"} popperWidth={"200px"} renderOption={e => {
    return <div style={{
      display: "flex",
      width: "100%",
      justifyContent: "space-between"
    }}>
            <Typography>{e.text}</Typography>
            <Typography>{e.percentage}</Typography>
          </div>;
  }} options={[{
    id: 1,
    percentage: "10%",
    text: "Thuế đầu vào"
  }, {
    id: 2,
    percentage: "20%",
    text: "Thuế đầu vào"
  }, {
    id: 3,
    percentage: "10%",
    text: "Thuế đầu vào"
  }, {
    id: 4,
    percentage: "0%",
    text: "Không áp dụng thuế"
  }, {
    id: 5,
    percentage: "5%",
    text: "Thuế đầu vào"
  }]} />;
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var y,T,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<any[]>([]);
  const options = [{
    id: 1,
    name: "Tiền mặt"
  }, {
    id: 2,
    name: "Ví Shopee"
  }, {
    id: 3,
    name: "VNPAY-QR"
  }, {
    id: 4,
    name: "Zalo Pay"
  }, {
    id: 5,
    name: "Vietcombank"
  }, {
    id: 6,
    name: "VietinBank"
  }, {
    id: 7,
    name: "SHBC"
  }, {
    id: 8,
    name: "Sacombank"
  }, {
    id: 9,
    name: "Techcombank"
  }];
  return <Dropdown.type label="Thanh toán dự kiến" placeholder="Chọn thanh toán dự kiến" {...args} multiple value={selected} onChange={setSelected} renderOption={e => e.name} disabledSelectAll tooltipLabel="Chọn phương thức thanh toán" options={options} disabledOptions={selected.length === 4 ? options.filter(e => !selected.find(s => s.id === e.id)) : []} />;
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var k,B,C;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState<any[]>([{
    id: 1,
    name: "Tiền mặt"
  }]);
  return <Dropdown.type label="Thanh toán dự kiến" placeholder="Chọn thanh toán dự kiến" {...args} multiple value={selected} onChange={setSelected} renderOption={e => e.name} inline options={[{
    id: 1,
    name: "Tiền mặt"
  }, {
    id: 2,
    name: "Ví Shopee"
  }, {
    id: 3,
    name: "VNPAY-QR"
  }, {
    id: 4,
    name: "Zalo Pay"
  }, {
    id: 5,
    name: "Vietcombank"
  }, {
    id: 6,
    name: "VietinBank"
  }, {
    id: 7,
    name: "SHBC"
  }, {
    id: 8,
    name: "Sacombank"
  }, {
    id: 9,
    name: "Techcombank"
  }]} />;
}`,...(C=(B=p.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const le=["Basic","Standard","Multiple","Inline"];export{o as Basic,p as Inline,d as Multiple,r as Standard,le as __namedExportsOrder,ce as default};
