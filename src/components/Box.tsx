import React, { FocusEventHandler, memo, MouseEventHandler, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import {
  Borders,
  cssBorders,
  cssFlexbox,
  cssPalette,
  cssSizing,
  cssSpacing,
  Flexbox,
  Palette,
  Sizing,
  Spacing,
} from "../theme";

export interface BoxProps extends PropsWithChildren<{}>, Spacing, Sizing, Borders, Flexbox, Palette {
  shadow?: "small" | "regular" | "large";
  id?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
  return <StyledBox {...props} ref={ref} />;
});

const StyledBox = styled.div<BoxProps>`
  background: #fff;
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  ${({ shadow }) => {
    switch (shadow) {
      case "large":
        return css`
          box-shadow: ${({ theme }) => theme.pxToRem(4)} ${({ theme }) => theme.pxToRem(4)}
            ${({ theme }) => theme.pxToRem(20)} rgba(168, 168, 168, 0.5);
          border-radius: 3px;
        `;
      case "regular":
        return css`
          box-shadow: 0 ${({ theme }) => theme.pxToRem(8)} ${({ theme }) => theme.pxToRem(16)} rgba(168, 168, 168, 0.25);
          border-radius: 3px;
        `;
      case "small":
        return css`
          box-shadow: 0 2px ${({ theme }) => theme.pxToRem(4)} rgba(168, 168, 168, 0.25);
          border-radius: 3px;
        `;
      default:
        return null;
    }
  }}

  ${(props) => cssSizing(props)}

  ${(props) => cssSpacing(props)}

  ${(props) => cssBorders(props)}

  ${(props) => cssFlexbox(props)}

  ${(props) => cssPalette(props)}
`;

Box.displayName = "Box";
export default memo(Box);
