import React, { FocusEventHandler, memo, MouseEventHandler, ReactNode, useMemo } from "react";
import styled, { css, CSSObject } from "styled-components";
import CircularProgress from "./CircularProgress";
import { v4 as uuidv4 } from "uuid";
import { Borders, cssBorders, cssMargin, MarginSpacing } from "../theme";
import useRippleAnywhere, { cssRippleAnywhere } from "../hooks/useRippleAnywhere";
import { isNaN } from "lodash";
import { EmptySpace } from "../assets/svgr";

export interface ButtonProps extends React.PropsWithChildren<{}>, MarginSpacing, Borders {
  size?: "large" | "regular";
  variant?: "contained" | "outlined" | "normal" | "text" | "plain";
  disabled?: boolean;
  isLoading?: boolean;
  destruction?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  width?: CSSObject["width"];
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { isLoading, width, variant = "contained", startIcon, endIcon, disabled, children, size = "regular", id, ...props },
    ref
  ) => {
    const uid = useMemo(() => (id ? id : `Sapo-Button-${uuidv4()}`), [id]);
    useRippleAnywhere(uid);
    if (isLoading && !!startIcon) {
      startIcon = <EmptySpace />;
    }
    if (isLoading && !!endIcon) {
      endIcon = <EmptySpace />;
    }
    return (
      <StyledButton
        isLoading={isLoading}
        {...props}
        disabled={disabled}
        endIcon={endIcon}
        startIcon={startIcon}
        ref={ref}
        variant={variant}
        size={size}
        id={uid}
        _width={width}
      >
        {startIcon}
        {isLoading && <StyledCircularProgress />}
        {children ? (
          <StyledButtonChildren
            haveStartIcon={!!startIcon}
            haveEndIcon={!!endIcon}
            isLoading={isLoading}
            variant={variant}
          >
            {children}
          </StyledButtonChildren>
        ) : null}
        {endIcon}
      </StyledButton>
    );
  }
);

const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  transform-box: fill-box;
  transform-origin: center;
`;

const StyledButtonChildren = styled.span<
  Pick<ButtonProps, "variant" | "isLoading"> & { haveStartIcon: boolean; haveEndIcon: boolean }
>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ haveEndIcon, theme }) => (haveEndIcon ? theme.pxToRem(8) : 0)} 0
    ${({ haveStartIcon, theme }) => (haveStartIcon ? theme.pxToRem(8) : 0)};
  z-index: 2;
  font-size: inherit;
  font-weight: inherit;
  ${({ isLoading }) => {
    if (isLoading) {
      return css`
        color: transparent;
      `;
    }
  }}
`;

const StyledButton = styled.button<ButtonProps & { _width?: CSSObject["width"] }>`
  display: inline-flex;
  justify-content: center;
  flex: none;
  position: relative;
  align-items: center;
  padding: 0;
  outline: 0;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  ${({ theme }) => theme.typography["subtitle1"]};
  
  ${() => cssRippleAnywhere}
  
  svg {
    height: ${(p) => p.theme.pxToRem(20)};
    width: ${(p) => p.theme.pxToRem(20)};
  }

  ${({ size, _width, variant, theme }) => {
    let heightPx = 36;
    let minWidthPx = 64;
    let width = _width ? (isNaN(+_width) ? _width : theme.pxToRem(+_width)) : undefined;
    if (size === "large") {
      heightPx = 48;
      minWidthPx = 128;
    }
    return css`
      height: ${({ theme }) =>
        variant === "text" || variant === "plain" ? theme.pxToRem(36) : theme.pxToRem(heightPx)};
      padding: 0 ${({ theme }) => (variant === "text" || variant === "plain" ? 0 : theme.pxToRem(16))};
      min-width: ${({ theme }) =>
        variant === "text" || variant === "plain" ? "unset" : width ? width : theme.pxToRem(minWidthPx)};
      width: ${width};
    `;
  }}
  
  ${({ isLoading }) => {
    if (isLoading)
      return css`
        pointer-events: none;
      `;
  }}

  ${({ disabled }) => {
    if (disabled)
      return css`
        cursor: not-allowed;
      `;
  }}

  ${({ variant, disabled, destruction, isLoading }) => {
    switch (variant) {
      case "contained":
        if (disabled) {
          return css`
            border: none;
            background: ${(p) => p.theme.palette.ink["20"]};
            color: ${(p) => p.theme.palette.ink["60"]};
          `;
        } else if (destruction) {
          return css`
            border: none;
            background: ${(p) => p.theme.palette.error.main};
            color: #fff;

            .ripple {
              background-color: ${(p) => p.theme.palette.error["60"]};
            }

            &:hover {
              border-color: ${(p) => p.theme.palette.error["80"]};
              background: ${(p) => p.theme.palette.error["80"]};
            }

            &:focus-visible {
              background: ${(p) => p.theme.palette.error["60"]};
            }
          `;
        }
        if (isLoading) {
          return css`
            background-color: ${(p) => p.theme.palette.primary["60"]};
            border: none;
            color: #fff;
          `;
        }
        return css`
          color: #fff;
          background: ${(p) => p.theme.palette.primary.main};
          border: none;

          &:hover {
            background: ${(p) => p.theme.palette.primary["80"]};
          }

          &:focus-visible {
            background: #007ce8;
          }
        `;
      case "outlined":
        if (disabled) {
          return css`
            color: ${(p) => p.theme.palette.text.disabled};
            background: #fff;
            border: 1px solid ${(p) => p.theme.palette.ink["30"]};
          `;
        }
        if (destruction) {
          return css`
            border: 1px solid ${(p) => p.theme.palette.error.main};
            background: #fff;
            color: ${(p) => p.theme.palette.error.main};

            .ripple {
              background-color: ${(p) => p.theme.palette.error["5"]};
            }

            &:hover {
              background: ${(p) => p.theme.palette.error["10"]};
            }

            &:focus-visible {
              background: ${(p) => p.theme.palette.error["5"]};
            }
          `;
        }
        return css`
          color: ${(p) => p.theme.palette.primary.main};
          border: 1px solid ${(p) => p.theme.palette.primary.main};
          background: #fff;

          &:hover {
            background-color: ${(p) => p.theme.palette.primary["10"]};
          }

          &:focus-visible {
            background: ${(p) => p.theme.palette.primary["20"]};
          }
        `;
      case "normal":
        if (disabled) {
          return css`
            color: ${(p) => p.theme.palette.text.disabled};
            background: #fff;
            border: 1px solid ${(p) => p.theme.palette.ink["30"]};
          `;
        }
        if (destruction) {
          return css`
            border: 1px solid ${(p) => p.theme.palette.error.main};
            background: #fff;
            color: ${(p) => p.theme.palette.error.main};

            .ripple {
              background-color: ${(p) => p.theme.palette.error["5"]};
            }

            &:hover {
              background: ${(p) => p.theme.palette.error["10"]};
            }
          `;
        }
        return css`
          color: ${(p) => p.theme.palette.ink.main};
          border: 1px solid ${(p) => p.theme.palette.stroke};
          background: #fff;

          .ripple {
            background-color: ${(p) => p.theme.palette.primary["40"]};
          }

          &:hover {
            background-color: ${(p) => p.theme.palette.primary["5"]};
          }

          &:focus-visible {
            background: ${(p) => p.theme.palette.primary["15"]};
          }
        `;
      case "text":
        if (disabled) {
          return css`
            color: ${(p) => p.theme.palette.ink["60"]};
            border: none;
            background: transparent;
          `;
        }
        if (destruction) {
          return css`
            border: none;
            background: transparent;
            color: ${(p) => p.theme.palette.error.main};

            .ripple {
              background-color: transparent;
            }

            &:hover {
              color: ${(p) => p.theme.palette.error["80"]};
            }

            &:focus-visible {
              color: ${(p) => p.theme.palette.error["60"]};
            }
          `;
        }
        return css`
          color: ${(p) => p.theme.palette.primary.main};
          border: none;
          background: transparent;
          padding: 0;

          .ripple {
            background-color: transparent;
          }

          &:hover {
            color: ${(p) => p.theme.palette.primary["80"]};
          }

          &:focus-visible {
            color: #007ce8;
          }
        `;
      case "plain":
        if (disabled) {
          return css`
            color: ${(p) => p.theme.palette.ink["60"]};
            border: none;
            background: transparent;
          `;
        }
        if (destruction) {
          return css`
            border: none;
            background: transparent;
            color: ${(p) => p.theme.palette.error.main};

            .ripple {
              background-color: transparent;
            }

            &:hover {
              color: ${(p) => p.theme.palette.error["80"]};
            }
          `;
        }
        return css`
          color: ${(p) => p.theme.palette.text.primary};
          border: none;
          background: transparent;
          padding: 0;

          .ripple {
            background-color: transparent;
          }

          &:hover {
            color: ${(p) => p.theme.palette.primary.main};
          }
        `;
    }
  }}

  ${(props) => cssMargin(props)}

  ${(props) => cssBorders(props)}
}
`;

Button.displayName = "Button";
export default memo(Button);
