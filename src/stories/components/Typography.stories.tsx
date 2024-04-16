import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Typography from "../../components/Typography";

export default {
  id: "Typography",
  title: "Components/Typography",
  component: Typography,
  argTypes: {},
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = (args) => <Typography.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  children: "Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=10952%3A9140",
  },
};
