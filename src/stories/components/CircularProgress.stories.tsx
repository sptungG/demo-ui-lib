import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CircularProgress from "../../components/CircularProgress";

export default {
  id: "CircularProgress",
  title: "Components/CircularProgress",
  component: CircularProgress,
  argTypes: {},
} as Meta<typeof CircularProgress>;

const Template: StoryFn<typeof CircularProgress> = () => <CircularProgress.type color={"primary"} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A118",
  },
};
