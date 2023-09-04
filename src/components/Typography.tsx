import React, { memo } from "react";
import styled, { css, CSSObject } from "styled-components";
import { cssSpacing, getColorStatusByVariant, PropTypes, Spacing, TypographyVariant } from "../theme";

export interface TypographyProps extends React.PropsWithChildren<{}>, Spacing {
  variant?: TypographyVariant;
  color?: PropTypes.ColorVariant | CSSObject["color"];
  align?: "center" | "inherit" | "justify" | "left" | "right";
  noWrap?: boolean;
  width?: CSSObject["width"];
  minWidth?: CSSObject["minWidth"];
  maxWidth?: CSSObject["maxWidth"];
  fontWeight?: "light" | "regular" | "medium" | "bold";
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant = "body1", fontWeight, align = "inherit", width, ...props }, ref) => {
    return (
      <StyledTypography {...props} ref={ref} align={align} fontWeight={fontWeight} variant={variant} _width={width} />
    );
  }
);
const StyledTypography = styled.p<TypographyProps & { _width?: CSSObject["width"] }>`
  box-sizing: border-box;
  ${(p) => p.theme.typography?.[p?.variant || "body1"]};
  ${({ color }) => getColorStatusByVariant(color)}
  text-align: ${(p) => p.align};
  width: ${({ _width, theme }) => (_width ? (isNaN(+_width) ? _width : theme.pxToRem(+_width)) : undefined)};
  min-width: ${({ minWidth, theme }) =>
    minWidth ? (isNaN(+minWidth) ? minWidth : theme.pxToRem(+minWidth)) : undefined};
  max-width: ${({ maxWidth, theme }) =>
    maxWidth ? (isNaN(+maxWidth) ? maxWidth : theme.pxToRem(+maxWidth)) : undefined};
  font-weight: ${({ fontWeight }) =>
    fontWeight === "light"
      ? 300
      : fontWeight === "regular"
      ? 400
      : fontWeight === "medium"
      ? 500
      : fontWeight === "bold"
      ? 700
      : undefined};
  ${({ noWrap }) =>
    noWrap
      ? css`
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `
      : null}
  ${(props) => cssSpacing(props)}
`;

Typography.displayName = "Typography";
export default memo(Typography);
