import React, { memo } from "react";
import styled, { css } from "styled-components";

export interface ToggleProps {
  checked?: boolean;
  onChange?: (event: any) => void;
  size?: "small" | "large";
}

const Toggle = ({ onChange, checked, size }: ToggleProps) => {
  return (
    <StyledToggleContainer size={size ? size : "large"}>
      <StyledToggleInput checked={checked} onChange={onChange} />
      <StyledToggle size={size ? size : "large"} />
    </StyledToggleContainer>
  );
};

const StyledToggleContainer = styled.div<Pick<ToggleProps, "size">>`
  display: inline-flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: transparent;

  ${({ size }) => {
    let heightPx = 20;
    let widthPx = 36;
    if (size === "small") {
      heightPx = 16;
      widthPx = 26;
    }
    return css`
      height: ${(p) => p.theme.pxToRem(heightPx)};
      width: ${(p) => p.theme.pxToRem(widthPx)};
    `;
  }}

  ${({ theme }) => theme.typography["body1"]};
}
`;
const StyledToggleInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const StyledToggle = styled.span<Pick<ToggleProps, "size">>`
  ${({ size }) => {
    let heightPx = 14;
    let widthPx = 36;
    if (size === "small") {
      heightPx = 10;
      widthPx = 26;
    }
    return css`
      height: ${(p) => p.theme.pxToRem(heightPx)};
      width: ${(p) => p.theme.pxToRem(widthPx)};
    `;
  }}
  border-radius: ${(p) => p.theme.pxToRem(34)};
  background-color: ${(p) => p.theme.palette.ink["30"]};
  align-items: center;
  position: absolute;

  &::before {
    position: absolute;
    left: 0;
    content: "";
    bottom: -3px;
    background-color: ${(p) => p.theme.palette.ink["60"]};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    ${({ size }) => {
      let widthPx = 20;
      if (size === "small") {
        widthPx = 16;
      }
      return css`
        height: ${(p) => p.theme.pxToRem(widthPx)};
        width: ${(p) => p.theme.pxToRem(widthPx)};
      `;
    }}
  }

  ${StyledToggleInput}:checked + &::before {
    background-color: ${(p) => p.theme.palette.primary.main};
    ${({ size }) => {
      let translateX = 16;
      if (size === "small") {
        translateX = 10;
      }
      return css`
        -webkit-transform: translateX(${translateX}px);
        -ms-transform: translateX(${translateX}px);
        transform: translateX(${translateX}px);
      `;
    }}
  }

  ${StyledToggleInput}:checked + & {
    background-color: ${(p) => p.theme.palette.primary["20"]};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}
`;

Toggle.displayName = "Toggle";
export default memo(Toggle);
