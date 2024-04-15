import{j as v}from"./styled-components.browser.esm-BiQtg4p9.js";import{r as i}from"./index-BjzEU6Zr.js";import{A as p}from"./AutoCompleteInfinite-C67mg2-f.js";import{l as b}from"./index-C0fuwcOY.js";import"./Button-BneYr597.js";import"./CircularProgress-B7DgIoGt.js";import"./OffOutlineCloseIcon-C3ZF4iWJ.js";import"./OffCloseIcon-dIrXP-IS.js";import"./CircleCheckOutlineIcon-7m-Hf7Te.js";import"./ClearIcon-CTCte1z_.js";import"./ErrorOutlineIcon-C0uk5SEn.js";import"./SapoIcon-Ong2Henh.js";import"./v4-8I8R7izr.js";import"./Chip-S8oiI7Ah.js";import"./IconButton-C_jwIMBT.js";import"./useRippleCenter-fyPqct0G.js";import"./Typography-DbQM3xCn.js";import"./UIComponentProvider-CICpnxab.js";import"./Box-CmmyW-oH.js";import"./index-DIVfDX71.js";import"./ButtonGroup-D15u6qfv.js";import"./Checkbox-BYMGdY0l.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./Alert-C2SqmsB-.js";import"./RadioGroup-Ztn1OArN.js";import"./Toggle-BLK8q4BS.js";import"./SapoCircularProgress-BVd8Nqie.js";import"./Link-DD9ODXsv.js";import"./Tabs-Bf3FDTM_.js";import"./LinearProgress-BulaN-sJ.js";import"./ProgressStep-CTpx3zVV.js";import"./Grid-CK-aGCPn.js";import"./LoadingCircularProgress-DqZ1pgs3.js";import"./extends-BRA9QXyq.js";import"./tiny-invariant-CopsF_GD.js";const re={id:"AutoCompleteInfinite",title:"Components/AutoCompleteInfinite",component:p,argTypes:{}},L=m=>{const[u,_]=i.useState(),f=i.useCallback(async e=>{try{const t={data:{reasons:s,metadata:T}},o=t.data.reasons.filter(a=>a.name.includes(e.query||""));return Promise.resolve({data:[...o].splice(t.data.metadata.page*10,10),limit:10,total:o.length})}catch{}},[s]),y=i.useCallback(e=>e.name,[]),h=i.useCallback(async(e,t,o)=>{if(b.isNil(t)||t.name.toLocaleLowerCase()!==e.toLocaleLowerCase()){let a;o.length>0&&(a=[...o].reverse().find(g=>g.name.toLocaleLowerCase()===e.toLocaleLowerCase())),r({id:(a==null?void 0:a.id)||0,name:e})}},[s]),r=e=>{_(e)},C=i.useCallback(async e=>({...e,...R,page:e.page||1,query:e.query}),[s]);return v.jsx(p.type,{...m,value:u,onChange:e=>{r(e)},fetchOptions:f,renderOption:y,onSubmit:h,onQueryChange:C,onClickCreate:e=>{r({id:0,name:e})},createable:!0})},n=L.bind({});n.storyName="default";n.args={label:"Lý do hủy đơn",placeholder:"Nhập lý do hủy",required:!0};n.parameters={design:{type:"figma",url:"https://www.figma.com/file/47UYscREX47yX7YD3XERVZ/Fix-UI-OMNI?node-id=10475%3A106309"}};const R={type:"cancel",objects:"order",includeInactive:!1,includeDelete:!1},T={total:100,page:0,limit:10},s=[{id:1,name:"Lý do hủy đơn 1",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:2,name:"Lý do hủy đơn 2",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:3,name:"Lý do hủy đơn 3",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:4,name:"Lý do hủy đơn 4",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:5,name:"Lý do hủy đơn 5",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:6,name:"Lý do hủy đơn 6",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:7,name:"Lý do hủy đơn 7",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:8,name:"Lý do hủy đơn 8",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:9,name:"Lý do hủy đơn 9",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"},{id:10,name:"Lý do hủy đơn 10",is_active:!0,is_default:!0,is_delete:!1,created_on:"2022-09-05T12:06:23Z",modified_on:"2022-09-05T12:06:23Z",note:"",object:"type",tenant_id:2e6,type:"cancel"}];var l,d,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`args => {
  const [reason, setReason] = useState<ReasonResponse | null>();
  const handleFetchOptions = useCallback(async (filter: ReasonFilter) => {
    try {
      const res = {
        data: {
          reasons: reasons,
          metadata: meteData
        }
      };
      const data = res.data.reasons.filter(item => item.name.includes(filter.query || ""));
      return Promise.resolve(({
        data: [...data].splice(res.data.metadata.page * 10, 10),
        limit: 10,
        total: data.length
      } as DataSource));
    } catch (error) {}
  }, [reasons]);
  const renderOption = useCallback(option => option.name, []);
  const onSubmit = useCallback(async (query, value: ReasonResponse | null | undefined, options: ReasonResponse[]) => {
    if (isNil(value) || value.name.toLocaleLowerCase() !== query.toLocaleLowerCase()) {
      let selected: ReasonResponse | undefined;
      if (options.length > 0) {
        const optionsReverse = [...options].reverse();
        selected = optionsReverse.find(e => e.name.toLocaleLowerCase() === query.toLocaleLowerCase());
      }
      onChange(({
        id: selected?.id || 0,
        name: query
      } as ReasonResponse));
    }
  }, [reasons]);
  const onChange = (value: ReasonResponse) => {
    setReason(value);
  };
  const onQueryChange = useCallback(async filter => {
    let dataSourceFilter: ReasonFilter = {
      ...filter,
      ...initFilter,
      page: filter.page || 1,
      query: filter.query
    };
    return dataSourceFilter;
  }, [reasons]);
  return <AutoCompleteInfinite.type {...args} value={reason} onChange={value => {
    onChange(value);
  }} fetchOptions={handleFetchOptions} renderOption={renderOption} onSubmit={onSubmit} onQueryChange={onQueryChange} onClickCreate={value => {
    onChange(({
      id: 0,
      name: value
    } as ReasonResponse));
  }} createable />;
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const le=["Basic"];export{n as Basic,le as __namedExportsOrder,re as default};
