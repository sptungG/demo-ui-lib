import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Chip from "../../components/Chip";

export default {
  title: "Components/Chip",
  component: Chip.type,
  argTypes: {},
} as Meta<typeof Chip>;

const Template: StoryFn<typeof Chip> = (args) => <Chip.type {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Chip",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11133%3A10149",
  },
};

export const Action = Template.bind({});
Action.args = {
  label: "Chip",
  onDelete: () => {},
};
Action.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6359%3A6009",
  },
};
