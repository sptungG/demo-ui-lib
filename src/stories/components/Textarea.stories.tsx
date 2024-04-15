import React, { useCallback, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea from "../../components/Textarea";

export default {
  id: "Textarea",
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  const [text, setText] = useState("");
  const handleChange = useCallback((value) => setText(value), []);
  return <Textarea.type {...args} required value={text} onChange={handleChange} />;
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  label: "Ghi chú",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
