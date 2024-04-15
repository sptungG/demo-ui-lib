import{j as e}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as c,R as le}from"./index-BjzEU6Zr.js";import{l as g,m as oe,n as ce,o as v,p as m,q as me,r as t,s as ie,t as ae,g as se}from"./AutoCompleteInfinite-C67mg2-f.js";import{L as u}from"./Link-DD9ODXsv.js";import{C as p}from"./Chip-S8oiI7Ah.js";import{B as S}from"./Button-BneYr597.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./CircularProgress-B7DgIoGt.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./index-C0fuwcOY.js";import"./IconButton-C_jwIMBT.js";import"./Typography-DbQM3xCn.js";import"./ButtonGroup-D15u6qfv.js";import"./Box-CmmyW-oH.js";import"./Checkbox-BYMGdY0l.js";import"./Alert-C2SqmsB-.js";import"./UIComponentProvider-CICpnxab.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./useRippleCenter-fyPqct0G.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./v4-8I8R7izr.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./index-DIVfDX71.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const nt={id:"Table",title:"Components/Table",component:g,argTypes:{}};function de(l,n,i,s,a,r,h,k){return{id:l,name:n,calories:i,fat:s,carbs:a,protein:r,status:h,isHaveDrillDown:k}}const d=[];for(let l=0;l<3;l++)d.push(de(l+1,"Frozen yoghurt",Math.random(),Math.random(),Math.random(),Math.random(),"Hoàn thành",!!(l%3)));const E={name:!0,calories:!0,group:!0,fat:!0,carbs:!0,protein:!0,status:!0},ge=l=>e.jsxs(oe,{children:[e.jsx(ce,{children:e.jsxs(v,{children:[e.jsx(m,{children:"Name"}),e.jsx(m,{children:"Calories"}),e.jsx(m,{children:"Fat (g)"}),e.jsx(m,{children:"Carbs (g)"}),e.jsx(m,{children:"Protein (g)"}),e.jsx(m,{children:"Trạng thái"})]})}),e.jsx(me,{children:d.map((n,i)=>e.jsxs(v,{children:[e.jsx(m,{style:{width:300},children:n.name}),e.jsx(m,{children:n.calories}),e.jsx(m,{children:n.fat}),e.jsx(m,{children:n.carbs}),e.jsx(m,{children:n.protein}),e.jsx(m,{children:n.status})]},i))})]}),T=ge.bind({});T.args={};T.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const ue=l=>e.jsxs(g.type,{...l,items:d,children:[e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:n=>e.jsx(u.type,{children:n.name})}),e.jsx(t,{field:"calories",align:"center",title:"Calories"}),e.jsx(t,{field:"fat",align:"center",title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"}),e.jsx(t,{width:150,field:"status",title:"Trạng thái",children:n=>e.jsx(p.type,{size:"small",label:n.status,variant:"success"})})]}),C=ue.bind({});C.args={tableSize:"small"};C.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const pe=l=>e.jsxs(g.type,{...l,items:d,children:[e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:n=>e.jsx(u.type,{children:n.name})}),e.jsx(t,{field:"calories",align:"center",title:"Calories"}),e.jsxs(t,{align:"center",title:"Detail",children:[e.jsx(t,{field:"fat",align:"center",title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"})]}),e.jsx(t,{width:150,field:"status",title:"Trạng thái",children:n=>e.jsx(p.type,{size:"small",label:n.status,variant:"success"})})]}),x=pe.bind({});x.args={};x.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const he=l=>{const n=c.useCallback(()=>{},[]);return e.jsxs(g.type,{...l,items:d,onToggleSettings:n,settingColumns:E,children:[e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:i=>e.jsx(u.type,{children:i.name})}),e.jsx(t,{field:"calories",align:"center",title:"Calories"}),e.jsxs(t,{field:"group",align:"center",title:"Detail",children:[e.jsx(t,{field:"fat",align:"center",title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"})]}),e.jsx(t,{width:150,field:"status",align:"center",title:"Trạng thái",children:i=>e.jsx(p.type,{size:"small",label:i.status,variant:"success"})})]})},f=he.bind({});f.args={};f.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const be=l=>{const n=c.useCallback(()=>{},[]);return e.jsxs(g.type,{...l,rowCount:!0,items:d,onToggleSettings:n,settingColumns:E,children:[e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:i=>e.jsx(u.type,{children:i.name})}),e.jsx(t,{field:"calories",align:"center",title:"Calories"}),e.jsxs(t,{field:"group",align:"center",title:"Detail",children:[e.jsx(t,{field:"fat",align:"center",title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"})]}),e.jsx(t,{width:150,field:"status",align:"center",title:"Trạng thái",children:i=>e.jsx(p.type,{size:"small",label:i.status,variant:"success"})})]})},y=be.bind({});y.args={tableTheme:"dark"};y.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const Te=l=>{const[n,i]=c.useState({});c.useCallback(()=>{},[]);const s=c.useCallback((a,r)=>{i({sortBy:r,sortDirection:a})},[]);return e.jsxs(g.type,{sortBy:n.sortBy,sortDirection:n.sortDirection,...l,items:d,onSort:s,children:[e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:a=>e.jsx(u.type,{children:a.name})}),e.jsx(t,{field:"calories",align:"center",sortable:!0,title:"Calories"}),e.jsx(t,{field:"fat",align:"center",sortable:!0,title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"}),e.jsx(t,{width:150,field:"status",title:"Trạng thái",children:a=>e.jsx(p.type,{size:"small",label:a.status,variant:"success"})})]})},j=Te.bind({});j.args={};j.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const Ce=l=>{const[n,i]=c.useState({}),s=c.useCallback(async r=>(await new Promise(h=>setTimeout(h,200)),r),[]),a=c.useCallback((r,h)=>{i({sortBy:h,sortDirection:r})},[]);return e.jsxs(g.type,{sortBy:n.sortBy,sortDirection:n.sortDirection,...l,items:d,onSort:a,onOpenDrillDown:s,children:[e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:r=>e.jsx(u.type,{children:r.name})}),e.jsx(t,{field:"calories",align:"center",sortable:!0,title:"Calories"}),e.jsx(t,{field:"fat",align:"center",sortable:!0,title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"}),e.jsx(t,{width:150,field:"status",title:"Trạng thái",children:r=>e.jsx(p.type,{size:"small",label:r.status,variant:"success"})}),e.jsx(ie,{children:({item:r})=>e.jsx("div",{style:{margin:30},children:JSON.stringify(r)})})]})},D=Ce.bind({});D.args={};D.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const xe=l=>{const[n,i]=c.useState([]);return e.jsxs(g.type,{...l,items:d,selectable:!0,selectedItems:n,onSelectionChange:i,children:[e.jsx(ae,{textSelected:(s,a)=>a?"Đã chọn tất cả trên trang này":`Đã chọn ${s} trên trang này`,children:({selectedItems:s})=>e.jsxs(le.Fragment,{children:[e.jsx(S,{ml:4,onClick:()=>console.log(s),variant:"text",children:"Cập nhật khách hàng"}),e.jsx(S,{ml:4,variant:"text",children:"Ngừng giao dịch"}),e.jsx(S,{ml:4,variant:"text",children:"Xóa khách hàng"}),e.jsx(se,{placeholder:"Thao tác khác",value:null,onChange:a=>console.log(a,s),ml:4,width:"180px",options:[{id:1,name:"Cập nhật khách hàng"},{id:2,name:"Ngừng giao dịch"},{id:3,name:"Xóa khách hàng"}],renderOption:a=>a.name})]})}),e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:s=>e.jsx(u.type,{children:s.name})}),e.jsx(t,{field:"calories",align:"center",title:"Calories"}),e.jsx(t,{field:"fat",align:"center",title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"}),e.jsx(t,{width:150,field:"status",title:"Trạng thái",children:s=>e.jsx(p.type,{size:"small",label:s.status,variant:"success"})})]})},B=xe.bind({});B.args={};B.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};const fe=l=>{const[n,i]=c.useState([]),s=c.useCallback(async()=>{},[]),[a,r]=c.useState({page:1,limit:20}),h=c.useCallback(async o=>(await new Promise(b=>setTimeout(b,200)),o),[]),k=c.useCallback((o,b)=>r(re=>({...re,limit:b,page:o})),[]);return e.jsxs(g.type,{...l,total:100,items:d,selectable:!0,nameObjectSelected:"khách hàng",selectedItems:n,onSelectionChange:i,onOpenDrillDown:h,page:a.page,limit:a.limit,onPageChange:k,onToggleSettings:s,settingColumns:E,sticky:!0,stickyPosition:"0px",onRowClick:o=>{alert(`Click Row: ${o}`)},children:[e.jsx(ae,{children:({selectedItems:o})=>e.jsxs(le.Fragment,{children:[e.jsx(S,{ml:4,onClick:()=>console.log(o),variant:"text",children:"Cập nhật khách hàng"}),e.jsx(S,{ml:4,variant:"text",children:"Ngừng giao dịch"}),e.jsx(S,{ml:4,variant:"text",children:"Xóa khách hàng"}),e.jsx(se,{placeholder:"Thao tác khác",value:null,onChange:b=>console.log(b,o),ml:4,strategy:"fixed",width:"180px",options:[{id:1,name:"Cập nhật khách hàng"},{id:2,name:"Ngừng giao dịch"},{id:3,name:"Xóa khách hàng"}],renderOption:b=>b.name})]})}),e.jsx(t,{field:"name",title:"Dessert (100g serving)",children:o=>e.jsx(u.type,{children:o.name})}),e.jsx(t,{field:"calories",align:"center",title:"Calories"}),e.jsx(t,{field:"fat",align:"center",title:"Fat (g)"}),e.jsx(t,{field:"carbs",align:"center",title:"Carbs (g)"}),e.jsx(t,{maxWidth:300,field:"protein",align:"center",title:"Protein (g)"}),e.jsx(t,{width:150,field:"status",title:"Trạng thái",children:o=>e.jsx(p.type,{size:"small",label:o.status,variant:"success"})}),e.jsx(ie,{children:({item:o})=>e.jsx("div",{style:{margin:30},children:JSON.stringify(o)})})]})},w=fe.bind({});w.args={};w.parameters={design:{type:"figma",url:"https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8651%3A7472"}};var F,A,P;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  return <TableBasic>
      <TableHeadBasic>
        <TableRowBasic>
          <TableCellBasic>Name</TableCellBasic>
          <TableCellBasic>Calories</TableCellBasic>
          <TableCellBasic>Fat&nbsp;(g)</TableCellBasic>
          <TableCellBasic>Carbs&nbsp;(g)</TableCellBasic>
          <TableCellBasic>Protein&nbsp;(g)</TableCellBasic>
          <TableCellBasic>Trạng thái</TableCellBasic>
        </TableRowBasic>
      </TableHeadBasic>
      <TableBodyBasic>
        {foods.map((item, index) => {
        return <TableRowBasic key={index}>
              <TableCellBasic style={{
            width: 300
          }}>{item.name}</TableCellBasic>
              <TableCellBasic>{item.calories}</TableCellBasic>
              <TableCellBasic>{item.fat}</TableCellBasic>
              <TableCellBasic>{item.carbs}</TableCellBasic>
              <TableCellBasic>{item.protein}</TableCellBasic>
              <TableCellBasic>{item.status}</TableCellBasic>
            </TableRowBasic>;
      })}
      </TableBodyBasic>
    </TableBasic>;
}`,...(P=(A=T.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var z,L,O;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <Table.type {...args} items={foods}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="fat" align="center" title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>;
}`,...(O=(L=C.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var I,Y,R;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <Table.type {...args} items={foods}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn align="center" title="Detail">
        <TableColumn field="fat" align="center" title="Fat (g)" />
        <TableColumn field="carbs" align="center" title="Carbs (g)" />
        <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      </TableColumn>
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>;
}`,...(R=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:R.source}}};var W,N,M;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const handleToggleSettings = useCallback(() => {}, []);
  return <Table.type {...args} items={foods} onToggleSettings={handleToggleSettings} settingColumns={settingColumns}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="group" align="center" title="Detail">
        <TableColumn field="fat" align="center" title="Fat (g)" />
        <TableColumn field="carbs" align="center" title="Carbs (g)" />
        <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      </TableColumn>
      <TableColumn width={150} field="status" align="center" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>;
}`,...(M=(N=f.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var Q,X,G;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`args => {
  const handleToggleSettings = useCallback(() => {}, []);
  return <Table.type {...args} rowCount items={foods} onToggleSettings={handleToggleSettings} settingColumns={settingColumns}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="group" align="center" title="Detail">
        <TableColumn field="fat" align="center" title="Fat (g)" />
        <TableColumn field="carbs" align="center" title="Carbs (g)" />
        <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      </TableColumn>
      <TableColumn width={150} field="status" align="center" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>;
}`,...(G=(X=y.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var H,J,$;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const [filter, setFilter] = useState<{
    sortBy?: string;
    sortDirection?: SortDirection;
  }>({});
  const handleToggleSettings = useCallback(() => {}, []);
  const handleSort = useCallback((direction: SortDirection, field?: string) => {
    setFilter({
      sortBy: field,
      sortDirection: direction
    });
  }, []);
  return <Table.type sortBy={filter.sortBy} sortDirection={filter.sortDirection} {...args} items={foods} onSort={handleSort}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" sortable title="Calories" />
      <TableColumn field="fat" align="center" sortable title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>;
}`,...($=(J=j.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var U,_,q;D.parameters={...D.parameters,docs:{...(U=D.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const [filter, setFilter] = useState<{
    sortBy?: string;
    sortDirection?: SortDirection;
  }>({});
  const handleOpenDrillDown = useCallback(async (item: FoodType) => {
    await new Promise(r => setTimeout(r, 200));
    return item;
  }, []);
  const handleSort = useCallback((direction: SortDirection, field?: string) => {
    setFilter({
      sortBy: field,
      sortDirection: direction
    });
  }, []);
  return <Table.type sortBy={filter.sortBy} sortDirection={filter.sortDirection} {...args} items={foods} onSort={handleSort} onOpenDrillDown={handleOpenDrillDown}>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" sortable title="Calories" />
      <TableColumn field="fat" align="center" sortable title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
      <TableDrillDown>
        {({
        item
      }: TableDrillDownTemplate<FoodType>) => <div style={{
        margin: 30
      }}>{JSON.stringify(item)}</div>}
      </TableDrillDown>
    </Table.type>;
}`,...(q=(_=D.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var K,V,Z;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<FoodType[]>([]);
  return <Table.type {...args} items={foods} selectable selectedItems={selectedItems} onSelectionChange={setSelectedItems}>
      <TableCellBulkAction textSelected={(num: number, isSelectedAll: boolean) => isSelectedAll ? "Đã chọn tất cả trên trang này" : \`Đã chọn \${num} trên trang này\`}>
        {({
        selectedItems
      }: TableCellBulkActionTemplate) => <React.Fragment>
            <Button ml={4} onClick={() => console.log(selectedItems)} variant="text">
              Cập nhật khách hàng
            </Button>
            <Button ml={4} variant="text">
              Ngừng giao dịch
            </Button>
            <Button ml={4} variant="text">
              Xóa khách hàng
            </Button>
            <Dropdown placeholder="Thao tác khác" value={null} onChange={value => console.log(value, selectedItems)} ml={4} width="180px" options={[{
          id: 1,
          name: "Cập nhật khách hàng"
        }, {
          id: 2,
          name: "Ngừng giao dịch"
        }, {
          id: 3,
          name: "Xóa khách hàng"
        }]} renderOption={item => item.name} />
          </React.Fragment>}
      </TableCellBulkAction>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="fat" align="center" title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
    </Table.type>;
}`,...(Z=(V=B.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var ee,te,ne;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<FoodType[]>([]);
  const handleToggleSettings = useCallback(async () => {}, []);
  const [filter, setFilter] = useState({
    page: 1,
    limit: 20
  });
  const handleOpenDrillDown = useCallback(async (item: FoodType) => {
    await new Promise(r => setTimeout(r, 200));
    return item;
  }, []);
  const handlePageChange = useCallback((page: number, limit: number) => setFilter(prev => ({
    ...prev,
    limit: limit,
    page: page
  })), []);
  return <Table.type {...args} total={100} items={foods} selectable nameObjectSelected={"khách hàng"} selectedItems={selectedItems} onSelectionChange={setSelectedItems} onOpenDrillDown={handleOpenDrillDown} page={filter.page} limit={filter.limit} onPageChange={handlePageChange} onToggleSettings={handleToggleSettings} settingColumns={settingColumns} sticky stickyPosition="0px" onRowClick={item => {
    alert(\`Click Row: \${item}\`);
  }}>
      <TableCellBulkAction>
        {({
        selectedItems
      }: TableCellBulkActionTemplate) => <React.Fragment>
            <Button ml={4} onClick={() => console.log(selectedItems)} variant="text">
              Cập nhật khách hàng
            </Button>
            <Button ml={4} variant="text">
              Ngừng giao dịch
            </Button>
            <Button ml={4} variant="text">
              Xóa khách hàng
            </Button>
            <Dropdown placeholder="Thao tác khác" value={null} onChange={value => console.log(value, selectedItems)} ml={4} strategy="fixed" width="180px" options={[{
          id: 1,
          name: "Cập nhật khách hàng"
        }, {
          id: 2,
          name: "Ngừng giao dịch"
        }, {
          id: 3,
          name: "Xóa khách hàng"
        }]} renderOption={item => item.name} />
          </React.Fragment>}
      </TableCellBulkAction>
      <TableColumn field="name" title="Dessert (100g serving)">
        {(item: FoodType) => <Link.type>{item.name}</Link.type>}
      </TableColumn>
      <TableColumn field="calories" align="center" title="Calories" />
      <TableColumn field="fat" align="center" title="Fat (g)" />
      <TableColumn field="carbs" align="center" title="Carbs (g)" />
      <TableColumn maxWidth={300} field="protein" align="center" title="Protein (g)" />
      <TableColumn width={150} field="status" title="Trạng thái">
        {(item: FoodType) => <Chip.type size="small" label={item.status} variant="success" />}
      </TableColumn>
      <TableDrillDown>
        {({
        item
      }: TableDrillDownTemplate<FoodType>) => <div style={{
        margin: 30
      }}>{JSON.stringify(item)}</div>}
      </TableDrillDown>
    </Table.type>;
}`,...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const lt=["Basic","Small","GroupColumn","SettingColumn","DarkTheme","Sortable","DrillDown","Selectable","OftenUsed"];export{T as Basic,y as DarkTheme,D as DrillDown,x as GroupColumn,w as OftenUsed,B as Selectable,f as SettingColumn,C as Small,j as Sortable,lt as __namedExportsOrder,nt as default};
