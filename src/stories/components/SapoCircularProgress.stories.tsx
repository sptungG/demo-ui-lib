import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SapoCircularProgress from "../../components/SapoCircularProgress";

export default {
  title: "Components/SapoCircularProgress",
  component: SapoCircularProgress.type,
  argTypes: {},
} as Meta<typeof SapoCircularProgress>;

const Template: StoryFn<typeof SapoCircularProgress> = (args) => <SapoCircularProgress.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11113%3A9047",
  },
};
