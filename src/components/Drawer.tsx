import React, { memo, useEffect } from "react";
import styled, { css } from "styled-components";
import CloseIcon from "../assets/svgr/CloseIcon";
import IconButton from "./IconButton";
import { useModal } from "./ModalProvider";
import { cssSizing, cssSpacing, Sizing, Spacing } from "../theme";
import { ArrowChevronBigLeftIcon } from "../assets/svgr";

export interface DrawerProps extends React.PropsWithChildren<{}>, Sizing, Spacing {
  anchor?: "bottom" | "left" | "right" | "top";
}

const Drawer = ({ children, anchor = "left", ...props }: DrawerProps) => {
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
    <StyledDrawer>
      <Backdrop />
      <Container anchor={anchor}>
        <Paper anchor={anchor} {...props}>
          {children}
        </Paper>
      </Container>
    </StyledDrawer>
  );
};

export default React.memo(Drawer);

export { DrawerTitle, DrawerContent, DrawerActions };

const StyledBackButton = styled(IconButton)`
  padding: 0;
  color: ${({ theme }) => theme.palette.ink["40"]};
  &:hover {
    background: ${({ theme }) => theme.palette.primary["10"]};
  }
`;

const StyledCloseButton = styled(IconButton)<Pick<DrawerTitleProps, "divider">>`
  position: absolute;
  padding: 0;
  top: ${({ theme, divider }) => theme.pxToRem(divider ? 14 : 24)};
  right: ${({ theme }) => theme.pxToRem(24)};
  color: ${({ theme }) => theme.palette.ink["40"]};

  &:hover {
    background: ${({ theme }) => theme.palette.primary["10"]};
  }
`;

interface DrawerTitleProps extends React.PropsWithChildren<{}>, Spacing {
  divider?: boolean;
  haveBackButton?: boolean;
  onBack?: () => any;
}

const StyledDrawerTitle = styled.div<DrawerTitleProps>`
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

const DrawerTitle = memo(({ children, divider, haveBackButton, onBack, ...props }: DrawerTitleProps) => {
  const { dismissModal } = useModal();
  return (
    <StyledDrawerTitle divider={divider} {...props}>
      {haveBackButton ? (
        <StyledBackButton mr={2} size="small" variant="text" onClick={onBack}>
          <ArrowChevronBigLeftIcon />
        </StyledBackButton>
      ) : null}
      {children}
      <StyledCloseButton size="small" variant="text" divider={divider} onClick={dismissModal}>
        <CloseIcon />
      </StyledCloseButton>
    </StyledDrawerTitle>
  );
});

interface DrawerContentProps extends React.PropsWithChildren<{}>, Spacing {}

const StyledDrawerContent = styled.div<DrawerContentProps>`
  ${({ theme }) => theme.typography["body1"]};
  padding: ${({ theme }) => theme.pxToRem(16)} ${({ theme }) => theme.pxToRem(24)} 0 ${({ theme }) => theme.pxToRem(24)};
  box-sizing: border-box;
  overflow: auto;
  flex: 1;

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

const DrawerContent = memo((props: DrawerContentProps) => {
  return <StyledDrawerContent {...props} />;
});

interface DrawerActionsProps extends React.PropsWithChildren<{}>, Spacing {}

const StyledDrawerActions = styled.div<DrawerActionsProps>`
  position: relative;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pxToRem(24)};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > button {
    margin-left: ${({ theme }) => theme.pxToRem(16)};
  }

  ${(props) => cssSpacing(props)}
`;

const DrawerActions = memo((props: DrawerActionsProps) => {
  return <StyledDrawerActions {...props} />;
});

const Paper = styled.div<Partial<DrawerProps>>`
  background: #fff;
  box-sizing: border-box;
  ${({ anchor }) => {
    switch (anchor) {
      case "top":
      case "bottom":
        return css`
          width: 100%;
        `;
      case "left":
      case "right":
        return css`
          height: 100%;
          display: flex;
          flex-direction: column;
        `;
      default:
        return css``;
    }
  }}
  ${(props) => cssSizing(props)}
  ${(props) => cssSpacing(props)}
`;

const StyledDrawer = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0;
`;

const Container = styled.div<Partial<DrawerProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  outline: 0;
  opacity: 1;
  width: 100%;
  height: 100%;

  ${({ anchor }) => {
    switch (anchor) {
      case "left":
        return css`
          align-items: flex-start;
          justify-content: flex-start;
        `;
      case "top":
        return css`
          align-items: flex-start;
          justify-content: flex-start;
        `;
      case "bottom":
        return css`
          align-items: flex-end;
          justify-content: flex-start;
        `;
      case "right":
        return css`
          align-items: flex-start;
          justify-content: flex-end;
        `;
      default:
        return css`
          align-items: flex-end;
          justify-content: flex-end;
        `;
    }
  }}
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
