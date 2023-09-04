import React, { memo, useState } from "react";
import Dialog, { DialogActions, DialogContent, DialogTitle } from "./Dialog";
import Button from "./Button";
import { useModal } from "./ModalProvider";

export interface ConfirmDialogProps {
  title: string;
  destruction?: boolean;
  message?: React.ReactNode;
  primaryText?: string;
}

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const { destruction, primaryText, message, title, ...remainProps } = props;
  const { closeModal, dismissModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Dialog size="small" {...remainProps}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <Button onClick={dismissModal} variant="outlined" destruction={destruction}>
          Thoát
        </Button>
        <Button
          isLoading={isLoading}
          onClick={async () => {
            setIsLoading(true);
            try {
              await closeModal({ isConfirm: true });
            } finally {
              setIsLoading(false);
            }
          }}
          destruction={destruction}
        >
          {primaryText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(ConfirmDialog);
