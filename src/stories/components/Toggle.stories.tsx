import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toggle from "../../components/Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => <Toggle.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9990",
  },
};
