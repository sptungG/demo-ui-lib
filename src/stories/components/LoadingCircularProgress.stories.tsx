import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingCircularProgress from "../../components/LoadingCircularProgress";

export default {
  title: "Components/LoadingCircularProgress",
  component: LoadingCircularProgress.type,
  argTypes: {},
} as ComponentMeta<typeof LoadingCircularProgress>;

const Template: ComponentStory<typeof LoadingCircularProgress> = (args) => <LoadingCircularProgress.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
  },
};
