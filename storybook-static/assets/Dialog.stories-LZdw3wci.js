import{j as t}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as D}from"./index-BjzEU6Zr.js";import{B as e}from"./Button-BneYr597.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./CircularProgress-B7DgIoGt.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./index-C0fuwcOY.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import"./Typography-DbQM3xCn.js";import{T as O}from"./AutoCompleteInfinite-C67mg2-f.js";import"./ButtonGroup-D15u6qfv.js";import{B as L}from"./Box-CmmyW-oH.js";import"./Checkbox-BYMGdY0l.js";import"./Alert-C2SqmsB-.js";import{D as d,a as m,b as u,c as g,u as p}from"./UIComponentProvider-CICpnxab.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./useRippleCenter-fyPqct0G.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./v4-8I8R7izr.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DIVfDX71.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const Dt={id:"Dialog",title:"Components/Dialog",component:d.type,subcomponents:{DialogTitle:m,DialogContent:u,DialogActions:g},argTypes:{}},b=r=>{const{confirm:a}=p(),l=()=>{a(r,async()=>{await new Promise(n=>setTimeout(n,200))})};return t.jsx(L.type,{height:"100vh",width:"100vw",children:t.jsx(e.type,{onClick:l,children:"Open"})})},o=b.bind({});o.args={title:"Bạn chắc chắn muốn xóa các sản phẩm này?",message:"Thao tác này sẽ xóa các sản phẩm bạn đã chọn. Thao tác này không thể khôi phục.",primaryText:"Xóa",destruction:!0};o.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474"}};const P=r=>{const{openModal:a}=p(),l=()=>{const{dismissModal:n,closeAllModal:c}=p();return t.jsxs(d.type,{...r,children:[t.jsx(m.type,{divider:!0,haveBackButton:!0,children:"Cập nhật khách hàng"}),t.jsx(u.type,{children:"Cập nhật khách hàng"}),t.jsxs(g.type,{children:[t.jsx(e.type,{destruction:!0,onClick:c,variant:"outlined",children:"Thoát"}),t.jsx(e.type,{onClick:n,destruction:!0,children:"Xóa"})]})]})};return t.jsx(e.type,{onClick:()=>{a(l).result.then(n=>console.log(n))},children:"Open"})},i=P.bind({});i.args={};i.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474"}};const Y=r=>{const{openModal:a}=p(),l=()=>{const{closeModal:n,dismissModal:c}=p(),[w,h]=D.useState(!1),[y,A]=D.useState(""),E=async()=>{h(!0),await new Promise(S=>setTimeout(S,200)),h(!1),n({text:y})};return t.jsxs(d.type,{...r,children:[t.jsx(m.type,{divider:!0,children:"Cập nhật khách hàng"}),t.jsx(u.type,{children:t.jsx(O.type,{label:"Họ và tên",value:y,onChange:A})}),t.jsxs(g.type,{children:[t.jsx(e.type,{destruction:!0,onClick:c,variant:"outlined",children:"Thoát"}),t.jsx(e.type,{isLoading:w,onClick:E,destruction:!0,children:"Xóa"})]})]})};return t.jsx(e.type,{onClick:()=>{a(l).result.then(n=>console.log(n))},children:"Open"})},s=Y.bind({});s.args={};s.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474"}};var x,C,B;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(args: ConfirmDialogProps) => {
  const {
    confirm
  } = useModal();
  const handleOpen = () => {
    confirm(args, async () => {
      await new Promise(r => setTimeout(r, 200));
    });
  };
  return <Box.type height="100vh" width="100vw">
      <Button.type onClick={handleOpen}>Open</Button.type>
    </Box.type>;
}`,...(B=(C=o.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var k,f,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`(args: DialogProps) => {
  const {
    openModal
  } = useModal();
  const DialogDoSomething = () => {
    const {
      dismissModal,
      closeAllModal
    } = useModal();
    return <Dialog.type {...args}>
        <DialogTitle.type divider haveBackButton>
          Cập nhật khách hàng
        </DialogTitle.type>
        <DialogContent.type>Cập nhật khách hàng</DialogContent.type>
        <DialogActions.type>
          <Button.type destruction onClick={closeAllModal} variant="outlined">
            Thoát
          </Button.type>
          <Button.type onClick={dismissModal} destruction>
            Xóa
          </Button.type>
        </DialogActions.type>
      </Dialog.type>;
  };
  return <Button.type onClick={() => {
    openModal(DialogDoSomething).result.then(rs => console.log(rs));
  }}>
      Open
    </Button.type>;
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var T,j,v;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`(args: DialogProps) => {
  const {
    openModal
  } = useModal();
  const DialogDoSomething = () => {
    const {
      closeModal,
      dismissModal
    } = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState("");
    const handleOk = async () => {
      setIsLoading(true);
      await new Promise(r => setTimeout(r, 200));
      setIsLoading(false);
      closeModal({
        text: text
      });
    };
    return <Dialog.type {...args}>
        <DialogTitle.type divider>Cập nhật khách hàng</DialogTitle.type>
        <DialogContent.type>
          <TextField.type label="Họ và tên" value={text} onChange={setText} />
        </DialogContent.type>
        <DialogActions.type>
          <Button.type destruction onClick={dismissModal} variant="outlined">
            Thoát
          </Button.type>
          <Button.type isLoading={isLoading} onClick={handleOk} destruction>
            Xóa
          </Button.type>
        </DialogActions.type>
      </Dialog.type>;
  };
  return <Button.type onClick={() => {
    openModal(DialogDoSomething).result.then(rs => console.log(rs));
  }}>
      Open
    </Button.type>;
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const xt=["Confirm","Back","Advance"];export{s as Advance,i as Back,o as Confirm,xt as __namedExportsOrder,Dt as default};
