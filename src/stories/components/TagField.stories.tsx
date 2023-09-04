import React, { useCallback, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagField from "../../components/TagField";
import { DataSource } from "../../components/DropdownInfinite";

export default {
  id: "TagField",
  title: "Components/TagField",
  component: TagField,
  argTypes: {},
} as ComponentMeta<typeof TagField>;

const Template: ComponentStory<typeof TagField> = (args) => {
  const [tags, setTags] = useState<string[]>([]);
  const handleChange = useCallback((tags) => {
    setTags(tags);
  }, []);
  const handleFetchOptions = useCallback(async (query: string, page: number) => {
    const data = tagsResponse.tags.filter((item) => item.includes(query));
    return Promise.resolve({
      data: [...data].splice(page * 10, 10),
      limit: 10,
      total: data.length,
    } as DataSource);
  }, []);
  return (
    <TagField.type
      {...args}
      fetchOptions={handleFetchOptions}
      required
      tags={tags}
      value={tags}
      onChange={handleChange}
    />
  );
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  label: "Tags",
  placeholder: "Nhập ký tự và ấn Enter",
  "data-tip": "Đây là tên sản phẩm",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
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
