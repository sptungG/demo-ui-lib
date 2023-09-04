import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioGroup, { RadioGroupProps } from "../../components/RadioGroup";
import Radio from "../../components/Radio";

export default {
  id: "RadioGroup",
  title: "Components/RadioGroup",
  component: RadioGroup.type,
  subcomponents: { Radio },
  argTypes: {},
} as ComponentMeta<React.FC<RadioGroupProps>>;

const Template: ComponentStory<React.FC<RadioGroupProps>> = (args) => {
  const [value, setValue] = useState("Radio No1");
  return (
    <RadioGroup.type
      {...args}
      value={value}
      onChange={(value) => {
        console.log(value);
        setValue(value);
      }}
    >
      <Radio.type label="Item 1" value="Radio No1" checked disabled />
      <Radio.type label="Item 2" value="Radio No2" />
      <Radio.type label="Item 3" value="Radio No3" />
      <Radio.type label="Disabled Item" value="Radio No4" disabled />
    </RadioGroup.type>
  );
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9990",
  },
};
