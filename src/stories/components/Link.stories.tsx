import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "../../components/Link";

export default {
  id: "Link",
  title: "Components/Link",
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link.type {...args} />;

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
