import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "../../components/IconButton";
import CircleCheckOutlineIcon from "../../assets/svgr/CircleCheckOutlineIcon";

export default {
  id: "IconButton",
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {},
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  children: <CircleCheckOutlineIcon />,
  size: "large",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A191",
  },
};
