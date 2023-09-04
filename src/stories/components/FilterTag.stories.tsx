import React, { useCallback, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FilterTag, { DataSource } from "../../components/FilterTag";
import Box from "../../components/Box";

export default {
  id: "FilterTag",
  title: "Components/FilterTag",
  component: FilterTag,
  argTypes: {},
} as ComponentMeta<typeof FilterTag>;

const Template: ComponentStory<typeof FilterTag> = (args) => {
  const [selected, setSelected] = useState<any>(null);
  const handleFetchOptions = useCallback(
    async (query: string, page: number) => {
      const data = payment_method.filter((item) => item.name.includes(query));
      return Promise.resolve({
        data: [...data].splice(page * 10, 10),
        limit: 10,
        total: data.length,
      } as DataSource);
    },
    [payment_method]
  );
  const renderOption = useCallback((option) => option.name, []);

  return (
    <FilterTag.type
      label="Thanh toán dự kiến"
      placeholder="Chọn thanh toán dự kiến"
      {...args}
      value={selected}
      onChange={setSelected}
      fetchOptions={handleFetchOptions}
      renderOption={renderOption}
      popperWidth="400px"
      multiple
      searchable
      pageable
    />
  );
};

export const Basic = Template.bind({});
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6%3A550",
  },
};

const TemplateCustom: ComponentStory<typeof FilterTag> = (args) => {
  const [selected, setSelected] = useState<any>(null);
  const handleFetchOptions = useCallback(
    async (query: string, page: number) => {
      const data = tagsResponse.tags.filter((item) => item.includes(query));
      return Promise.resolve({
        data: [...data].splice(page * 10, 10),
        limit: 10,
        total: data.length,
      } as DataSource);
    },
    [payment_method]
  );
  const renderOption = useCallback((option) => option, []);

  return (
    <FilterTag.type
      label="Tag"
      placeholder="Chọn tag"
      {...args}
      value={selected}
      onChange={setSelected}
      fetchOptions={handleFetchOptions}
      renderOption={renderOption}
      popperWidth="400px"
      multiple
      isTag
      searchable
      pageable
    />
  );
};

export const Custom = TemplateCustom.bind({});
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6%3A550",
  },
};

const TemplateCustomNoData: ComponentStory<typeof FilterTag> = (args) => {
  const [selected, setSelected] = useState<any>(null);
  const handleFetchOptions = useCallback(async (query: string, page: number) => {
    return Promise.resolve({
      data: [],
      limit: 10,
      total: 0,
    } as DataSource);
  }, []);
  const renderOption = useCallback((option) => option, []);

  return (
    <FilterTag.type
      label="Serial"
      placeholder="Chọn serial"
      {...args}
      value={selected}
      onChange={setSelected}
      renderOption={renderOption}
      popperWidth="400px"
      multiple
      isTag
      searchable
    />
  );
};

export const CustomNoData = TemplateCustomNoData.bind({});
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6%3A550",
  },
};
const payment_method = [
  { id: 1, name: "Tiền mặt" },
  { id: 2, name: "Ví Shopee" },
  { id: 3, name: "VNPAY-QR" },
  { id: 4, name: "Zalo Pay" },
  { id: 5, name: "Vietcombank" },
  { id: 6, name: "VietinBank" },
  { id: 7, name: "SHBC" },
  { id: 8, name: "Sacombank" },
  { id: 9, name: "Techcombank" },
  { id: 10, name: "Tiền mặt và chuyển khoản" },
  { id: 11, name: "Momo" },
  { id: 12, name: "Chuyển khoản" },
  { id: 13, name: "VNPAY" },
  { id: 14, name: "Phương thức thanh toán này là phương thức thanh toán thủ công" },
];

const tagsResponse = {
  tags: [
    "THGFHH1234",
    "YDHFJDGF12",
    "mua hàng",
    "Post_ID_t_62aa89e7b101dd00012361f8",
    "Conversation_ID_62aa89e7b101dd00012361f8",
    "Post_ID_t_607e3bf72d0f720001379d1a",
    "ID Khách hàng_3884568508302543",
    "Conversation_ID_607e3bf72d0f720001379d1a",
    "Post_ID_t_5e6f430200052a0001947163",
    "ID Khách hàng_3701312293275662",
    "Conversation_ID_5e6f430200052a0001947163",
    "Post_ID_t_60025fa463f87700014ba75d",
    "ID Khách hàng_2977464752378627",
    "Conversation_ID_60025fa463f87700014ba75d",
    "Post_ID_t_2919281581679442",
    "Post_ID_t_1523349411165221",
    "Post_ID_445457003277059",
    "live_stream",
    "ID Khách hàng _3701312293275662",
    "Post_ID_1021417658379534",
    "ID Khách hàng _2921942854586338",
    "Post_ID_1021407718380528",
    "ID Khách hàng_5039736652820215",
    "Conversation_ID_62f4af40e1a5be27eedfacaa",
    "Post_ID_t_61810af23252e30001a9779d",
    "ID Khách hàng_5308076169207521",
    "Conversation_ID_61810af23252e30001a9779d",
    "Post_ID_t_2884644291681646",
    "ID Khách hàng _3128818570563065",
    "PRO438",
    "PRO411",
    "dsgdfg",
    "dsfgrdglkgdojpoergkflk[dg",
    "PRO423",
    "PRO383",
    "PRO421",
    "PRO420",
    "PRO417",
    "PRO419",
    "PRO418",
    "PRO416",
    "PRO415",
    "PRO367",
    "SAPOM5KLV20KL1",
    "PRO407",
    "PRO400",
    "SAPORD3CVA2VV1",
    "PRO392",
    "PRO391",
    "PRO390",
    "PRO389",
    "PRO380",
    "PRO388",
    "PRO387",
    "PRO368",
    "Post_ID_t_129292513122161",
    "ID Khách hàng _5593165244068062",
    "PRO364",
    "ELLY12",
    "ELLYH5NA45SN",
    "ELLYCG12",
    "ELLY13",
    "PRO385",
    "ELLY37",
    "SAPOF3WH8GSALE",
    "kdjfkdf",
    "PRO382",
    "PRO379",
    "PRO366",
    "PRO356",
    "Post_ID_t_122875413199156",
    "ID Khách hàng _4166169646740462",
    "PRO349",
    "COD",
    "MUAHANG1",
    "PRO347",
    "PRO346",
    "Post_ID_t_2971688443053395",
    "page_Thời trang nhan sắc",
    "ID Khách hàng _3896631390384241",
    "sapoweb",
    "Giao đến bưu điện",
    "Post_ID_t_156266416819369",
    "page_Võ trọng Huy",
    "ID Khách hàng _5680518865311392",
    "Post_ID_t_3148295938741761",
    "page_Shop Demo S",
    "ID Khách hàng _7275138539225223",
    "Post_ID_157264336764240",
  ],
  metadata: {
    total: 696,
    page: 1,
    limit: 100,
  },
};
