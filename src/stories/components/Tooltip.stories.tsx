import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, Link, Tooltip, Typography } from "../../index";
import Box from "../../components/Box";
import { Placement, placements } from "@popperjs/core";

interface TooltipProps {
  "data-tip": string;
  "data-tip-placement": Placement;
}

export default {
  id: "Tooltip",
  title: "Components/Tooltip",
  argTypes: {},
} as Meta<React.FC<TooltipProps>>;

const Template: StoryFn<React.FC<TooltipProps>> = (args) => (
  <Box.type margin="100px 300px" display="flex">
    <Typography.type width="fit-content" {...args} />
  </Box.type>
);

export const Basic = Template.bind({});
Basic.storyName = "default";
Basic.args = {
  "data-tip": "Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam",
  "data-tip-placement": "bottom",
  children: "Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam",
};
Basic.argTypes = {
  "data-tip-placement": {
    options: placements,
    control: { type: "select" },
  },
};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9467",
  },
};

const TemplateCustom: StoryFn<React.FC<TooltipProps>> = (args) => {
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [rad, setRad] = useState(false);
  const [rad1, setRad1] = useState(false);
  const [countOpen, setCountOpen] = useState(0);
  const [countClose, setCountClose] = useState(0);

  const element = (
    <Button.type ml="8px" onClick={() => setNum((pre) => pre + 1)}>
      Increment number: {num}
    </Button.type>
  );
  return (
    <Box.type padding="24px">
      <Box.type display="flex" alignItems="center">
        <Typography.type width="150px" mr="16px">
          Normal Tooltip:
        </Typography.type>
        <Tooltip.type element="Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam">
          <Typography.type variant="h3">Normal Tooltip</Typography.type>
        </Tooltip.type>
      </Box.type>

      <Box.type mt="100px" display="flex" alignItems="center">
        <Typography.type width="150px" mr="16px">
          Interactive Tooltip:
        </Typography.type>
        <Tooltip.type interactive element="Nền tảng quản lý và bán hàng đa kênh được sử dụng nhiều nhất Việt Nam">
          <Typography.type variant="h3">Interactive Tooltip</Typography.type>
        </Tooltip.type>
      </Box.type>

      <Box.type mt="100px" display="flex" alignItems="center">
        <Typography.type width="150px" mr="16px">
          Controller Tooltip:
          <div>
            Open: {countOpen} Close: {countClose}
          </div>
        </Typography.type>
        <Tooltip.type
          open={open}
          onClose={() => {
            setOpen(false);
            setCountClose((pre) => pre + 1);
          }}
          onOpen={() => {
            setOpen(true);
            setCountOpen((pre) => pre + 1);
          }}
          element={
            <Button.type
              onClick={() => {
                setCountOpen(0);
                setCountClose(0);
              }}
            >
              Reset
            </Button.type>
          }
        >
          <Typography.type variant="h3">Controller Tooltip</Typography.type>
        </Tooltip.type>
      </Box.type>
      {/* <Tooltip.type element={element} placement="auto" interactive>
        <Typography.type variant="h3">Hover 100 test</Typography.type>
      </Tooltip.type> */}

      {/* {Array.from(Array(100).keys()).map(() => (
        <Tooltip.type
          element={element}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          onOpen={() => {
            setOpen(true);
          }}
        >
          <Typography.type variant="h3">Hover 100 test with control</Typography.type>
        </Tooltip.type>
      ))}

      {Array.from(Array(100).keys()).map(() => (
        <Tooltip.type element={element}>
          <Typography.type variant="h3">Hover 100 test</Typography.type>
        </Tooltip.type>
      ))} */}
    </Box.type>
  );
};

export const Custom = TemplateCustom.bind({});
Custom.storyName = "Custom";
Custom.argTypes = {
  "data-tip-placement": {
    options: ["top", "right", "bottom", "left", "auto"],
    control: { type: "select" },
  },
};
Custom.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11149%3A9467",
  },
};
