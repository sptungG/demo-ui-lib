import React, { useCallback, useRef, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Popover from "../../components/Popover";
import { Box, Button } from "../../index";

export default {
  id: "Popover",
  title: "Components/Popover",
  component: Popover,
  argTypes: {},
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Button.type ref={ref} onClick={handleOpen}>
        Open
      </Button.type>
      <Popover.type {...args} reference={ref.current} arrow open={open} onClose={handleClose}>
        <Box padding={2}>Li Europan lingues es membres del sam familie</Box>
      </Popover.type>
    </>
  );
};

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=1614%3A3521",
  },
};
