import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import LoadingCircularProgress from "../../components/LoadingCircularProgress";

export default {
  title: "Components/LoadingCircularProgress",
  component: LoadingCircularProgress.type,
  argTypes: {},
} as Meta<typeof LoadingCircularProgress>;

const Template: StoryFn<typeof LoadingCircularProgress> = (args) => <LoadingCircularProgress.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
  },
};
