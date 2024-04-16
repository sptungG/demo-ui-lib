import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import NumberField from "../../components/NumberField";

export default {
  id: "NumberField",
  title: "Components/NumberField",
  component: NumberField,
  argTypes: {},
} as Meta<typeof NumberField>;

const Template: StoryFn<typeof NumberField> = (args) => {
  const [price, setPrice] = useState<number>();
  return <NumberField.type {...args} label="Giá bán" tooltip="Tooltip gợi ý" value={price} onChange={setPrice} />;
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
