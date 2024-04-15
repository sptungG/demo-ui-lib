import React, { memo, useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import useRippleCenter, { cssRippleCenter } from "../hooks/useRippleCenter";

export interface CheckBoxProps {
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean, event: any) => void;
  label?: string;
  name?: string;
  value?: string;
  indeterminate?: boolean;
  id?: string;
  size?: "regular" | "large";
  theme?: CheckBoxTheme;
}

type CheckBoxTheme = "light" | "dark" | "grey";

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ onChange, size, theme, indeterminate, checked, disabled, id, label, ...props }, ref) => {
    const uid = useMemo(() => (id ? id : `Sapo-CheckBox-${uuidv4()}`), [id]);
    const containerId = useMemo(() => `Sapo-CheckBox__Container-${uuidv4()}`, []);
    const wrapInputId = useMemo(() => `Sapo-CheckBox__WrapInput-${uuidv4()}`, []);
    useRippleCenter(wrapInputId);
    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked, event);
      },
      [onChange]
    );
    return (
      <StyledCheckBoxContainer {...props} id={containerId}>
        <StyledWrapCheckBoxInput
          checked={checked}
          checkboxTheme={theme}
          id={wrapInputId}
          disabled={disabled}
          alone={!label}
          size={size}
        >
          <StyledCheckBoxInput
            ref={ref}
            id={uid}
            checked={checked}
            disabled={disabled}
            type="checkbox"
            onChange={handleChange}
            name={props.name}
            value={props.value}
          />
          <StyledCheckBox checked={checked} checkboxTheme={theme} indeterminate={indeterminate} disabled={disabled} />
        </StyledWrapCheckBoxInput>
        {!!label && (
          <StyledCheckBoxLabel disabled={disabled} htmlFor={uid}>
            {label}
          </StyledCheckBoxLabel>
        )}
      </StyledCheckBoxContainer>
    );
  }
);

const StyledCheckBoxContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  align-items: center;
  background-color: transparent;
  ${({ theme }) => theme.typography["body1"]};
`;

const StyledWrapCheckBoxInput = styled.div<
  Pick<CheckBoxProps, "size" | "disabled" | "checked"> & { alone?: boolean; checkboxTheme?: CheckBoxTheme }
>`
  width: ${({ theme, size }) => theme.pxToRem(size === "large" ? 30 : 24)};
  height: ${({ theme, size }) => theme.pxToRem(size === "large" ? 30 : 24)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  pointer-events: ${({ disabled }) => (disabled ? "none" : undefined)};

  ${() => cssRippleCenter}

  ${({ alone, checkboxTheme, checked }) => {
    if (alone) {
      return css`
        &:hover {
          background: ${({ theme }) =>
            checkboxTheme === "dark" ? "#243751" : checked ? theme.palette.primary["5"] : theme.palette.ink["30"]};
        }
      `;
    }
  }}
}
`;

const StyledCheckBoxLabel = styled.label<Pick<CheckBoxProps, "disabled">>`
  text-align: center;
  margin-left: ${({ theme }) => theme.pxToRem(4)};
  padding: 0;
  display: block;
  color: ${({ theme, disabled }) => (disabled ? theme.palette.ink["60"] : theme.palette.ink.main)};
  cursor: ${({ disabled }) => (disabled ? undefined : "pointer")};

  ${({ disabled }) => {
    if (!disabled) {
      return css`
        &:hover {
          color: ${(p) => p.theme.palette.primary.main};
        }
      `;
    }
  }}
`;

const StyledCheckBoxInput = styled.input`
  position: absolute;
  height: ${(p) => p.theme.pxToRem(24)};
  width: ${(p) => p.theme.pxToRem(24)};
  opacity: 0;
  z-index: 4;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
  }
`;

const StyledCheckBox = styled.div<
  Pick<CheckBoxProps, "indeterminate" | "disabled" | "checked"> & { checkboxTheme?: CheckBoxTheme }
>`
  width: ${(p) => p.theme.pxToRem(14)};
  height: ${(p) => p.theme.pxToRem(14)};
  background: transparent;
  align-items: center;
  position: relative;
  border: 2px solid ${({ theme, checkboxTheme }) => (checkboxTheme === "dark" ? "#fff" : theme.palette.ink["40"])};
  border-radius: 2px;
  box-sizing: border-box;

  ${({ indeterminate, disabled, checkboxTheme, checked }) => {
    if (disabled) {
      if (indeterminate) {
        return css`
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.777778 0H13.2222C13.4285 0 13.6263 0.0819442 13.7722 0.227806C13.9181 0.373667 14 0.571498 14 0.777778V13.2222C14 13.4285 13.9181 13.6263 13.7722 13.7722C13.6263 13.9181 13.4285 14 13.2222 14H0.777778C0.571498 14 0.373667 13.9181 0.227806 13.7722C0.0819442 13.6263 0 13.4285 0 13.2222V0.777778C0 0.571498 0.0819442 0.373667 0.227806 0.227806C0.373667 0.0819442 0.571498 0 0.777778 0ZM3.11111 6.22222V7.77778H10.8889V6.22222H3.11111Z' fill='%23DEDFE1'/%3E%3C/svg%3E");
          background-size: 100%;
          background-position: center;
          box-sizing: border-box;
          border: none;
        `;
      } else if (checked) {
        return css`
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.996 7.556L4.7 6.285L3.3 7.715L6.004 10.362L10.703 5.711L9.297 4.289L5.996 7.556Z' fill='%23DEDFE1'/%3E%3C/svg%3E");
          background-size: ${(p) => p.theme.pxToRem(14)};
          background-position: center;
          border-color: ${(p) => p.theme.palette.black["20"]};
        `;
      } else {
        return css`
          border-color: ${(p) => p.theme.palette.black["20"]};
        `;
      }
    } else {
      if (indeterminate) {
        return css`
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='9' y='11' width='6' height='2' fill='${({
            theme,
          }) =>
            checkboxTheme === "dark" ? "%23fff" : `%23${theme.palette.primary.main.replace("#", "")}`}'/%3E%3C/svg%3E");
          background-size: 200%;
          background-position: center;
          box-sizing: border-box;
          border: 2px solid ${({ theme }) => (checkboxTheme === "dark" ? "#fff" : theme.palette.primary.main)};
        `;
      } else if (checked) {
        return css`
          width: ${(p) => p.theme.pxToRem(14)};
          height: ${(p) => p.theme.pxToRem(14)};
          box-sizing: border-box;
          border: 2px solid ${({ theme }) => (checkboxTheme === "dark" ? "#fff" : theme.palette.primary.main)};
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.996 7.556L4.7 6.285L3.3 7.715L6.004 10.362L10.703 5.711L9.297 4.289L5.996 7.556Z' fill='${({
            theme,
          }) =>
            checkboxTheme === "dark" ? "%23fff" : `%23${theme.palette.primary.main.replace("#", "")}`}'/%3E%3C/svg%3E");
          background-size: ${(p) => p.theme.pxToRem(14)};
          background-position: center;
        `;
      }
    }
  }}
`;

CheckBox.displayName = "CheckBox";
export default memo(CheckBox);
