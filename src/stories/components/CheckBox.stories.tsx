import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox, { CheckBoxProps } from "../../components/Checkbox";

export default {
  title: "Components/CheckBox",
  component: CheckBox.type,
  argTypes: {},
} as ComponentMeta<React.FC<CheckBoxProps>>;

const Template: ComponentStory<React.FC<CheckBoxProps>> = (args) => {
  const [checked, setChecked] = useState(false);
  return <CheckBox.type checked={checked} {...args} onChange={setChecked} />;
};

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9990",
  },
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Chọn tất cả",
};
WithLabel.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A118",
  },
};
