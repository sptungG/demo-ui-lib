import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, useModal } from "../../index";
import TextField from "../../components/TextField";
import Drawer, { DrawerActions, DrawerContent, DrawerProps, DrawerTitle } from "../../components/Drawer";

export default {
  id: "Drawer",
  title: "Components/Drawer",
  component: Drawer.type,
  subcomponents: { DrawerTitle, DrawerContent, DrawerActions },
  argTypes: {},
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args: DrawerProps) => {
  const { openModal } = useModal();
  const DrawerDoSomething = () => {
    const { closeModal } = useModal();
    const [text, setText] = useState("");
    return (
      <Drawer.type {...args}>
        <DrawerTitle.type divider>Bộ lọc</DrawerTitle.type>
        <DrawerContent.type>
          <TextField.type label="Họ và tên" value={text} onChange={setText} />
        </DrawerContent.type>
        <DrawerActions.type>
          <Button.type destruction onClick={() => closeModal({ clear: true })} variant="outlined">
            Xóa bộ lọc
          </Button.type>
          <Button.type onClick={() => closeModal({ ok: true })}>Lọc</Button.type>
        </DrawerActions.type>
      </Drawer.type>
    );
  };
  return (
    <Button.type onClick={() => openModal(DrawerDoSomething).result.then((rs) => console.log(rs))}>Open</Button.type>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474",
  },
};
