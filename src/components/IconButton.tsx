import React, { memo, MouseEventHandler, useMemo } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useRippleCenter, { cssRippleCenter } from "../hooks/useRippleCenter";
import { cssSpacing, Spacing } from "../theme";
import CircularProgress from "./CircularProgress";

export interface IconButtonProps extends Spacing {
  size?: "extra-small" | "small" | "regular" | "medium" | "large";
  color?: "primary" | "secondary";
  variant?: "contained" | "text";
  disabled?: boolean;
  isLoading?: boolean;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<IconButtonProps>>(
  ({ id, isLoading, color = "primary", size = "regular", variant = "contained", children, ...props }, ref) => {
    const uid = useMemo(() => (id ? id : `Sapo-IconButton-${uuidv4()}`), [id]);
    useRippleCenter(uid);
    return (
      <StyledIconButton {...props} id={uid} ref={ref} variant={variant} color={color} size={size} isLoading={isLoading}>
        {isLoading ? <CircularProgress /> : children}
      </StyledIconButton>
    );
  }
);

const StyledIconButton = styled.button<IconButtonProps>`
  display: inline-flex;
  flex: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 50%;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  position: relative;

  ${() => cssRippleCenter}
  &:focus-visible {
    outline: none;
  }

  ${({ size }) => {
    let sizePx = 36;
    switch (size) {
      case "extra-small":
        sizePx = 16;
        break;
      case "small":
        sizePx = 24;
        break;
      case "medium":
        sizePx = 30;
        break;
      case "regular":
        sizePx = 36;
        break;
      case "large":
        sizePx = 48;
        break;
      default:
        sizePx = size && !isNaN(+size) ? +size : 36;
        break;
    }
    return css`
      &:after {
        padding-top: ${(p) => p.theme.pxToRem(sizePx)};
        padding-left: ${(p) => p.theme.pxToRem(sizePx)};
      }

      height: ${(p) => p.theme.pxToRem(sizePx)};
      width: ${(p) => p.theme.pxToRem(sizePx)};
      padding: ${(p) => p.theme.pxToRem(sizePx / 4)};
    `;
  }}

  ${({ color, variant, disabled }) => {
    if (variant === "contained") {
      if (disabled) {
        return css`
          background: #d3d5d7;
          color: ${(p) => p.theme.palette.ink["60"]};
        `;
      }
      switch (color) {
        case "secondary":
          return css`
            color: ${(p) => p.theme.palette.primary.main};
            background: ${(p) => p.theme.palette.primary["5"]};

            &:hover {
              color: #fff;
              background: ${(p) => p.theme.palette.primary.main};
            }
          `;
        case "primary":
        default:
          return css`
            color: #fff;
            background: ${(p) => p.theme.palette.primary.main};

            &:hover {
              background: ${(p) => p.theme.palette.primary["80"]};
            }
          `;
      }
    } else if (variant === "text") {
      if (disabled) {
        return css`
          color: ${(p) => p.theme.palette.text.disabled};
          background: transparent;
        `;
      }
      switch (color) {
        case "secondary":
          return css`
            color: ${(p) => p.theme.palette.primary.main};
            background: #fff;

            &:hover {
              color: #fff;
              background: ${(p) => p.theme.palette.ink[30]};
            }
          `;
        case "primary":
        default:
          return css`
            color: ${(p) => p.theme.palette.primary.main};
            background: transparent;

            &:hover {
              background: ${(p) => p.theme.palette.primary["40"]};
            }
          `;
      }
    }
  }}

  ${(props) => cssSpacing(props)}
`;

IconButton.displayName = "IconButton";
export default memo(IconButton);
