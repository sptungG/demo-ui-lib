import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CircularProgress from "../../components/CircularProgress";

export default {
  id: "CircularProgress",
  title: "Components/CircularProgress",
  component: CircularProgress,
  argTypes: {},
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = () => <CircularProgress.type color={"primary"} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A118",
  },
};
