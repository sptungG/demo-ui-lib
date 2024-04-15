import{j as t}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as o}from"./index-BjzEU6Zr.js";import{B as u}from"./Button-BneYr597.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./CircularProgress-B7DgIoGt.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./index-C0fuwcOY.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import{T as n}from"./Typography-DbQM3xCn.js";import{x as i}from"./AutoCompleteInfinite-C67mg2-f.js";import"./ButtonGroup-D15u6qfv.js";import{B as s}from"./Box-CmmyW-oH.js";import"./Checkbox-BYMGdY0l.js";import"./Alert-C2SqmsB-.js";import{p as B}from"./UIComponentProvider-CICpnxab.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./useRippleCenter-fyPqct0G.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./v4-8I8R7izr.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DIVfDX71.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const at={id:"Tooltip",title:"Components/Tooltip",argTypes:{}},N=a=>t.jsx(s.type,{margin:"100px 300px",display:"flex",children:t.jsx(n.type,{width:"fit-content",...a})}),e=N.bind({});e.storyName="default";e.args={"data-tip":"Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam","data-tip-placement":"bottom",children:"Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam"};e.argTypes={"data-tip-placement":{options:B,control:{type:"select"}}};e.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9467"}};const O=a=>{const[C,f]=o.useState(0),[E,l]=o.useState(!1);o.useState(!1),o.useState(!1);const[v,m]=o.useState(0),[j,y]=o.useState(0);return u.type,t.jsxs(s.type,{padding:"24px",children:[t.jsxs(s.type,{display:"flex",alignItems:"center",children:[t.jsx(n.type,{width:"150px",mr:"16px",children:"Normal Tooltip:"}),t.jsx(i.type,{element:"Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam",children:t.jsx(n.type,{variant:"h3",children:"Normal Tooltip"})})]}),t.jsxs(s.type,{mt:"100px",display:"flex",alignItems:"center",children:[t.jsx(n.type,{width:"150px",mr:"16px",children:"Interactive Tooltip:"}),t.jsx(i.type,{interactive:!0,element:"Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam",children:t.jsx(n.type,{variant:"h3",children:"Interactive Tooltip"})})]}),t.jsxs(s.type,{mt:"100px",display:"flex",alignItems:"center",children:[t.jsxs(n.type,{width:"150px",mr:"16px",children:["Controller Tooltip:",t.jsxs("div",{children:["Open: ",v," Close: ",j]})]}),t.jsx(i.type,{open:E,onClose:()=>{l(!1),y(r=>r+1)},onOpen:()=>{l(!0),m(r=>r+1)},element:t.jsx(u.type,{onClick:()=>{m(0),y(0)},children:"Reset"}),children:t.jsx(n.type,{variant:"h3",children:"Controller Tooltip"})})]})]})},p=O.bind({});p.storyName="Custom";p.argTypes={"data-tip-placement":{options:["top","right","bottom","left","auto"],control:{type:"select"}}};p.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9467"}};var c,h,x;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => <Box.type margin="100px 300px" display="flex">
    <Typography.type width="fit-content" {...args} />
  </Box.type>`,...(x=(h=e.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var d,g,T;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [rad, setRad] = useState(false);
  const [rad1, setRad1] = useState(false);
  const [countOpen, setCountOpen] = useState(0);
  const [countClose, setCountClose] = useState(0);
  const element = <Button.type ml="8px" onClick={() => setNum(pre => pre + 1)}>
      Increment number: {num}
    </Button.type>;
  return <Box.type padding="24px">
      <Box.type display="flex" alignItems="center">
        <Typography.type width="150px" mr="16px">
          Normal Tooltip:
        </Typography.type>
        <Tooltip.type element="Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam">
          <Typography.type variant="h3">Normal Tooltip</Typography.type>
        </Tooltip.type>
      </Box.type>

      <Box.type mt="100px" display="flex" alignItems="center">
        <Typography.type width="150px" mr="16px">
          Interactive Tooltip:
        </Typography.type>
        <Tooltip.type interactive element="Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam">
          <Typography.type variant="h3">Interactive Tooltip</Typography.type>
        </Tooltip.type>
      </Box.type>

      <Box.type mt="100px" display="flex" alignItems="center">
        <Typography.type width="150px" mr="16px">
          Controller Tooltip:
          <div>
            Open: {countOpen} Close: {countClose}
          </div>
        </Typography.type>
        <Tooltip.type open={open} onClose={() => {
        setOpen(false);
        setCountClose(pre => pre + 1);
      }} onOpen={() => {
        setOpen(true);
        setCountOpen(pre => pre + 1);
      }} element={<Button.type onClick={() => {
        setCountOpen(0);
        setCountClose(0);
      }}>
              Reset
            </Button.type>}>
          <Typography.type variant="h3">Controller Tooltip</Typography.type>
        </Tooltip.type>
      </Box.type>
      {/* <Tooltip.type element={element} placement="auto" interactive>
        <Typography.type variant="h3">Hover 100 test</Typography.type>
       </Tooltip.type> */}

      {/* {Array.from(Array(100).keys()).map(() => (
        <Tooltip.type
          element={element}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          onOpen={() => {
            setOpen(true);
          }}
        >
          <Typography.type variant="h3">Hover 100 test with control</Typography.type>
        </Tooltip.type>
       ))}
       {Array.from(Array(100).keys()).map(() => (
        <Tooltip.type element={element}>
          <Typography.type variant="h3">Hover 100 test</Typography.type>
        </Tooltip.type>
       ))} */}
    </Box.type>;
}`,...(T=(g=p.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const lt=["Basic","Custom"];export{e as Basic,p as Custom,lt as __namedExportsOrder,at as default};
