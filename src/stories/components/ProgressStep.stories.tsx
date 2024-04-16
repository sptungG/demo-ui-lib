import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ProgressStep, { ProgressStepDescriptor, ProgressStepProps } from "../../components/ProgressStep";

export default {
  title: "Components/ProgressStep",
  component: ProgressStep.type,
  argTypes: {},
} as Meta<React.FC<ProgressStepProps>>;

const Template: StoryFn<React.FC<ProgressStepProps>> = (args) => {
  const steps: ProgressStepDescriptor[] = [
    {
      id: 1,
      title: "Step 1",
      subTitle: "16/08/2022 09:50",
    },
    {
      id: 2,
      title: "Step 2",
      subTitle: "16/08/2022 11:50",
    },
    {
      id: 3,
      title: "Step 3",
      subTitle: "16/08/2022 14:50",
    },
    {
      id: 4,
      title: "Step 4",
      subTitle: "16/08/2022 09:50",
    },
    {
      id: 5,
      title: "Step 5",
      subTitle: "16/08/2022 09:50",
    },
  ];

  return <ProgressStep.type {...args} steps={steps} />;
};

export const Basic = Template.bind({});
Basic.args = {
  current: 3,
};
Basic.storyName = "default";
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=60%3A121",
  },
};
