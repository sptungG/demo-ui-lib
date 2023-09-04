import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBox from "../../components/SearchBox";

export default {
  id: "SearchBox",
  title: "Components/SearchBox",
  component: SearchBox,
  argTypes: {},
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => {
  const [query, setQuery] = useState("");
  return <SearchBox {...args} value={query} onChange={setQuery} />;
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Tìm kiếm theo mã phiếu yêu cầu bảo hành",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A239",
  },
};

const TemplateWithButton: ComponentStory<typeof SearchBox> = (args) => {
  const [query, setQuery] = useState("");
  return <SearchBox {...args} value={query} onChange={setQuery} />;
};

export const WithButton = TemplateWithButton.bind({});
WithButton.args = {
  placeholder: "Tìm kiếm khách hàng theo SĐT, tên, mã khách hàng,... (F4)",
  withBtn: true,
  textBtn: "Chọn nhanh",
};
WithButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
