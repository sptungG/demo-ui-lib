import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import LinearProgress, { LinearProgressProps } from "../../components/LinearProgress";

export default {
  id: "LinearProgress",
  title: "Components/LinearProgress",
  component: LinearProgress.type,
  argTypes: {},
} as Meta<React.FC<LinearProgressProps>>;

const Template: StoryFn<React.FC<LinearProgressProps>> = (args) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((previousProgress) => {
        if (previousProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <LinearProgress.type {...args} value={progress} />;
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=2%3A118",
  },
};
