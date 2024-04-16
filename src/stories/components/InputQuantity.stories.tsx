import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import InputQuantity from "../../components/InputQuantity";

export default {
  id: "InputQuantity",
  title: "Components/InputQuantity",
  component: InputQuantity,
  argTypes: {},
} as Meta<typeof InputQuantity>;

const Template: StoryFn<typeof InputQuantity> = (args) => {
  const [price, setPrice] = useState<number>();
  return <InputQuantity.type width="200px" {...args} label="Giá bán" tooltip="Tooltip gợi ý" value={price} onChange={setPrice} />;
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
