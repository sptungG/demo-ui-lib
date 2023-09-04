import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonGroup, { ButtonGroupProps } from "../../components/ButtonGroup";
import Button from "../../components/Button";
import ArrowCaretDownIcon from "../../assets/svgr/ArrowCaretDownIcon";
import PlusCircleIcon from "../../assets/svgr/PlusCircleIcon";

export default {
  id: "ButtonGroup",
  title: "Components/ButtonGroup",
  component: ButtonGroup.type,
  subcomponents: {
    Button,
  },
  argTypes: {},
} as ComponentMeta<React.FC<ButtonGroupProps>>;

const Template: ComponentStory<React.FC<ButtonGroupProps>> = (args) => (
  <ButtonGroup.type {...args}>
    <Button.type startIcon={<PlusCircleIcon />}>Button</Button.type>
    <Button.type startIcon={<ArrowCaretDownIcon style={{ position: "absolute" }} />} width={40} />
  </ButtonGroup.type>
);

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A118",
  },
};
