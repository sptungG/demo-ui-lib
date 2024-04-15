import React, { memo, MouseEvent, ReactNode, useCallback } from "react";
import styled, { css } from "styled-components";
import CheckBox from "./Checkbox";

export interface SelectItemProps {
  value?: any | null | undefined;
  selected?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  checkbox?: boolean;
  indeterminate?: boolean;
  onSelect?: (event: MouseEvent<HTMLButtonElement>, value: any | null | undefined) => void;
}

const SelectItem = memo(
  ({ value, indeterminate, disabled, children, onSelect, selected, checkbox }: SelectItemProps) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        onSelect?.(event, value);
      },
      [value, onSelect]
    );
    return (
      <StyledSelectItem
        type="button"
        data-selected={selected}
        disabled={disabled}
        role="option"
        data-event="true"
        data-value={value}
        onClick={handleClick}
        selected={selected}
      >
        {!!checkbox && <StyledCheckBox checked={selected} indeterminate={indeterminate} />}
        {children}
      </StyledSelectItem>
    );
  }
);

const StyledCheckBox = styled(CheckBox)`
  margin-right: ${({ theme }) => theme.pxToRem(4)};
`;

const StyledSelectItem = styled.button<Pick<SelectItemProps, "disabled" | "selected">>`
  ${({ theme }) => theme.typography["body1"]};
  display: flex;
  flex: none;
  width: 100%;
  align-items: center;
  min-height: ${({ theme }) => theme.pxToRem(32)};
  cursor: pointer;
  border: none;
  padding: 0 ${({ theme }) => theme.pxToRem(8)};
  border-radius: 3px;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  text-align: left;

  &:focus-visible {
    outline: none;
  }

  margin: ${({ theme }) => theme.pxToRem(4)} 0;

  &[data-selected="true"] {
    color: ${({ theme }) => theme.palette.primary.main};
    background: ${({ theme }) => theme.palette.primary["5"]};
    & * {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  ${({ disabled, selected }) =>
    disabled
      ? css`
          color: ${({ theme }) => theme.palette.ink["40"]};
          pointer-events: none;
        `
      : selected
      ? null
      : css`
          &:hover,
          &.focused {
            background: ${({ theme }) => theme.palette.ink["5"]};
          }
        `};
`;

export default SelectItem;
