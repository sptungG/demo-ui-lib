import React, { memo } from "react";
import styled, { css } from "styled-components";

export interface ButtonGroupProps {
  variant?: "contained" | "outlined" | "normal";
  size?: "large" | "regular";
  destruction?: boolean;
  children?: React.ReactNode;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ButtonGroupProps>>(
  ({ size, destruction, variant, children, ...props }, ref) => {
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { variant, size, destruction });
      }
      return child;
    });
    return (
      <StyledButtonGroup ref={ref} destruction={destruction} variant={variant}>
        {childrenWithProps}
      </StyledButtonGroup>
    );
  }
);

const StyledButtonGroup = styled.div<Pick<ButtonGroupProps, "variant" | "destruction">>`
  display: inline-flex;
  vertical-align: middle;

  & > * {
    position: relative;
    border-radius: 0;

    :first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    :last-child {
      border-right-width: 1px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }

  ${({ variant, destruction }) => {
    switch (variant) {
      case "outlined":
        return css`
          & > * {
            :first-child {
              border-right: none;
            }
          }
        `;
      case "normal":
        return css`
          & > * {
            :first-child {
              border-right: none;
            }
          }
        `;
      default:
        if (destruction) {
          return css`
            & > * {
              :first-child {
                border-right: 1px solid ${(p) => p.theme.palette.error["80"]};
              }
            }
          `;
        }
        return css`
          & > * {
            :first-child {
              border-right: 1px solid ${(p) => p.theme.palette.primary["80"]};
            }
          }
        `;
    }
  }}
`;

ButtonGroup.displayName = "ButtonGroup";
export default memo(ButtonGroup);
