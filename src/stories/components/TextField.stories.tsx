import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextField from "../../components/TextField";

export default {
  id: "TextField",
  title: "Components/TextField",
  component: TextField,
  argTypes: {},
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = (args) => {
  const [text, setText] = useState("");
  return <TextField.type {...args} value={text} onChange={setText} />;
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  label: "Tên sản phẩm",
  tooltip: "Đây là tên sản phẩm",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
