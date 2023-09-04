import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Box from "../../components/Box";
import Typography from "../../components/Typography";

export default {
  id: "Box",
  title: "Components/Box",
  component: Box,
  argTypes: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box.type width="300px" padding={4} {...args} />;

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  shadow: "regular",
  children: (
    <Typography>
      Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc,
      litot Europa usa li sam vocabular.
    </Typography>
  ),
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11133%3A9959",
  },
};
