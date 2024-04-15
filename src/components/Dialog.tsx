import React, { memo, useEffect } from "react";
import styled, { css } from "styled-components";
import CloseIcon from "../assets/svgr/CloseIcon";
import IconButton from "./IconButton";
import Box from "./Box";
import { useModal } from "./ModalProvider";
import { cssSizing, cssSpacing, Sizing, Spacing } from "../theme";
import { ArrowChevronBigLeftIcon } from "../assets/svgr";
import { isNil } from "lodash";

export interface DialogProps extends React.PropsWithChildren<{}>, Sizing, Spacing {
  size?: "small" | "regular" | "large" | string;
}

const Dialog = ({ size = "regular", children, ...props }: DialogProps) => {
  const { dismissModal } = useModal();
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        dismissModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <StyledDialog>
      <Backdrop />
      <Container>
        <Paper size={size} shadow="regular" {...props}>
          {children}
        </Paper>
      </Container>
    </StyledDialog>
  );
};

export default React.memo(Dialog);

export { DialogTitle, DialogContent, DialogActions };

const StyledBackButton = styled(IconButton)`
  padding: 0;
  color: ${({ theme }) => theme.palette.ink["40"]};

  &:hover {
    background: ${({ theme }) => theme.palette.primary["10"]};
  }
`;

const StyledCloseButton = styled(IconButton)<Pick<DialogTitleProps, "divider">>`
  position: absolute;
  padding: 0;
  top: ${({ theme, divider }) => theme.pxToRem(divider ? 14 : 24)};
  right: ${({ theme }) => theme.pxToRem(24)};
  color: ${({ theme }) => theme.palette.ink["40"]};

  &:hover {
    background: ${({ theme }) => theme.palette.ink["30"]};
  }
`;

interface DialogTitleProps extends React.PropsWithChildren<{}>, Spacing {
  divider?: boolean;
  hiddenCloseButton?: boolean;
  haveBackButton?: boolean;
  onBack?: () => any;
  onClose?: () => any;
}

const StyledDialogTitle = styled.div<DialogTitleProps>`
  position: relative;
  padding: 0 ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  box-sizing: border-box;
  height: ${({ theme, divider }) => theme.pxToRem(divider ? 52 : 48)};
  align-items: ${({ divider }) => (divider ? "center" : "flex-end")};
  border-bottom: ${({ divider, theme }) => (divider ? `1px solid ${theme.palette.stroke}` : null)};
  ${({ theme }) => theme.typography["h5"]};

  ${(props) => cssSpacing(props)}
`;

const DialogTitle = memo(
  ({ children, divider, haveBackButton, onBack, hiddenCloseButton, onClose, ...props }: DialogTitleProps) => {
    const { dismissModal } = useModal();
    return (
      <StyledDialogTitle divider={divider} {...props}>
        {haveBackButton ? (
          <StyledBackButton mr={2} size="small" variant="text" onClick={onBack}>
            <ArrowChevronBigLeftIcon />
          </StyledBackButton>
        ) : null}
        {children}
        {hiddenCloseButton ? null : (
          <StyledCloseButton size="small" variant="text" divider={divider} onClick={onClose ? onClose : dismissModal}>
            <CloseIcon />
          </StyledCloseButton>
        )}
      </StyledDialogTitle>
    );
  }
);

interface DialogContentProps extends React.PropsWithChildren<{}>, Spacing {}

const StyledDialogContent = styled.div<DialogContentProps>`
  ${({ theme }) => theme.typography["body1"]};
  padding: ${({ theme, padding }) => (!isNil(padding) ? padding : theme.pxToRem(16))}
    ${({ theme, padding }) => (!isNil(padding) ? padding : theme.pxToRem(24))}
    ${({ theme, padding }) => (!isNil(padding) ? padding : theme.pxToRem(16))}
    ${({ theme, padding }) => (!isNil(padding) ? padding : theme.pxToRem(24))};
  box-sizing: border-box;
  max-height: calc(100vh - ${({ theme }) => theme.pxToRem(200)});
  overflow: auto;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.pxToRem(6)};
    height: ${({ theme }) => theme.pxToRem(8)};
    background-color: ${({ theme }) => theme.palette.ink["20"]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.pxToRem(6)};
    background-color: ${({ theme }) => theme.palette.ink["40"]};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.ink["20"]};
  }

  ${(props) => cssSpacing(props)}
`;

const DialogContent = memo((props: DialogContentProps) => {
  return <StyledDialogContent {...props} />;
});

interface DialogActionsProps extends React.PropsWithChildren<{}>, Spacing {}

const StyledDialogActions = styled.div<DialogActionsProps>`
  position: relative;
  box-sizing: border-box;
  padding: ${({ theme, padding }) => theme.pxToRem(8)} ${({ theme, padding }) => theme.pxToRem(24)}
    ${({ theme, padding }) => theme.pxToRem(24)} ${({ theme, padding }) => theme.pxToRem(24)};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > button {
    margin-left: ${({ theme }) => theme.pxToRem(16)};
  }

  ${(props) => cssSpacing(props)}
`;

const DialogActions = memo((props: DialogActionsProps) => {
  return <StyledDialogActions {...props} />;
});

const Paper = styled(Box)<Pick<DialogProps, "size">>`
  ${({ size, theme }) => {
    let width;
    switch (size) {
      case "small":
        width = theme.pxToRem(600);
        break;
      case "regular":
        width = theme.pxToRem(700);
        break;
      case "large":
        width = theme.pxToRem(800);
        break;
      default:
        width = size;
    }
    return css`
      width: ${width};
    `;
  }}
  ${(props) => cssSizing(props)}
  ${(props) => cssSpacing(props)}
`;

const StyledDialog = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-top: ${({ theme }) => theme.pxToRem(50)};
  outline: 0;
  opacity: 1;
`;

const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  opacity: 1;
`;
