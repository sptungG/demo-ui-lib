import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { ButtonProps } from "../../components/Button";
import UploadIcon from "../../assets/svgr/UploadIcon";
import ArrowCaretDownIcon from "../../assets/svgr/ArrowCaretDownIcon";
import PlusCircleIcon from "../../assets/svgr/PlusCircleIcon";

export default {
  title: "Components/Button",
  component: Button.type,
  argTypes: {},
} as ComponentMeta<React.FC<ButtonProps>>;

const Template: ComponentStory<React.FC<ButtonProps>> = (args) => {
  return <Button.type {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: "Button",
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=8022%3A6230",
  },
};

export const IconLeftRight = Template.bind({});
IconLeftRight.args = {
  children: "Button",
  startIcon: <UploadIcon />,
};
IconLeftRight.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6359%3A6009",
  },
};

export const IconLeftAndRight = Template.bind({});
IconLeftAndRight.args = {
  children: "Button",
  startIcon: <PlusCircleIcon />,
  endIcon: <ArrowCaretDownIcon />,
};
IconLeftAndRight.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6359%3A6009",
  },
};

export const IconOnlyButton = Template.bind({});
IconOnlyButton.args = {
  startIcon: <ArrowCaretDownIcon style={{ position: "absolute" }} />,
  width: 40,
};
IconOnlyButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6359%3A6009",
  },
};

const TemplateBtnLoading: ComponentStory<React.FC<ButtonProps>> = (args) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleOnClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };
  return <Button.type onClick={handleOnClick} isLoading={isLoading} {...args}></Button.type>;
};

export const PressLoadingButton = TemplateBtnLoading.bind({});
PressLoadingButton.args = {
  children: "Press to load",
};
PressLoadingButton.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=6359%3A6009",
  },
};
