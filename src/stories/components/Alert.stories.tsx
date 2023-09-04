import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Alert from "../../components/Alert";

export default {
  id: "Alert",
  title: "Components/Alert",
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  severity: "success",
  children: "Liên kết tài khoản Google thành công!",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
