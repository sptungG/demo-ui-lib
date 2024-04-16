import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Link from "../../components/Link";

export default {
  id: "Link",
  title: "Components/Link",
  component: Link,
  argTypes: {},
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link.type {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  children: "Trang chủ",
  href: "/admin/dashboard",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
