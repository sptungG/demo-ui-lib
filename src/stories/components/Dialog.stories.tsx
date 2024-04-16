import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Box, Button, Dialog, useModal } from "../../index";
import TextField from "../../components/TextField";
import { DialogActions, DialogContent, DialogProps, DialogTitle } from "../../components/Dialog";
import ConfirmDialog, { ConfirmDialogProps } from "../../components/ConfirmDialog";

export default {
  id: "Dialog",
  title: "Components/Dialog",
  component: Dialog.type,
  subcomponents: { DialogTitle, DialogContent, DialogActions },
  argTypes: {},
} as Meta<typeof Dialog>;

const TemplateConfirmDialog: StoryFn<typeof ConfirmDialog> = (args: ConfirmDialogProps) => {
  const { confirm } = useModal();
  const handleOpen = () => {
    confirm(args, async () => {
      await new Promise((r) => setTimeout(r, 200));
    });
  };
  return (
    <Box.type height="100dvh" width="100dvw">
      <Button.type onClick={handleOpen}>Open</Button.type>
    </Box.type>
  );
};

export const Confirm = TemplateConfirmDialog.bind({});
Confirm.args = {
  title: "Bạn chắc chắn muốn xóa các sản phẩm này?",
  message: "Thao tác này sẽ xóa các sản phẩm bạn đã chọn. Thao tác này không thể khôi phục.",
  primaryText: "Xóa",
  destruction: true,
};
Confirm.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474",
  },
};

const TemplateWidthBack: StoryFn<typeof Dialog> = (args: DialogProps) => {
  const { openModal } = useModal();
  const DialogDoSomething = () => {
    const { dismissModal, closeAllModal } = useModal();
    return (
      <Dialog.type {...args}>
        <DialogTitle.type divider haveBackButton>
          Cập nhật khách hàng
        </DialogTitle.type>
        <DialogContent.type>Cập nhật khách hàng</DialogContent.type>
        <DialogActions.type>
          <Button.type destruction onClick={closeAllModal} variant="outlined">
            Thoát
          </Button.type>
          <Button.type onClick={dismissModal} destruction>
            Xóa
          </Button.type>
        </DialogActions.type>
      </Dialog.type>
    );
  };
  return (
    <Button.type
      onClick={() => {
        openModal(DialogDoSomething).result.then((rs) => console.log(rs));
      }}
    >
      Open
    </Button.type>
  );
};

export const Back = TemplateWidthBack.bind({});
Back.args = {};
Back.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474",
  },
};

const TemplateAdvance: StoryFn<typeof Dialog> = (args: DialogProps) => {
  const { openModal } = useModal();
  const DialogDoSomething = () => {
    const { closeModal, dismissModal } = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState("");
    const handleOk = async () => {
      setIsLoading(true);
      await new Promise((r) => setTimeout(r, 200));
      setIsLoading(false);
      closeModal({ text: text });
    };
    return (
      <Dialog.type {...args}>
        <DialogTitle.type divider>Cập nhật khách hàng</DialogTitle.type>
        <DialogContent.type>
          <TextField.type label="Họ và tên" value={text} onChange={setText} />
        </DialogContent.type>
        <DialogActions.type>
          <Button.type destruction onClick={dismissModal} variant="outlined">
            Thoát
          </Button.type>
          <Button.type isLoading={isLoading} onClick={handleOk} destruction>
            Xóa
          </Button.type>
        </DialogActions.type>
      </Dialog.type>
    );
  };
  return (
    <Button.type
      onClick={() => {
        openModal(DialogDoSomething).result.then((rs) => console.log(rs));
      }}
    >
      Open
    </Button.type>
  );
};

export const Advance = TemplateAdvance.bind({});
Advance.args = {};
Advance.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/dLpg6DjeBzl6jMtYQYe8uu/0.-Design-System?node-id=11%3A1474",
  },
};
