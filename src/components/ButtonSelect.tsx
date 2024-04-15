import React, { FocusEventHandler, Fragment, KeyboardEventHandler, memo, MouseEventHandler, useMemo } from "react";
import styled, { css, CSSObject, useTheme } from "styled-components";
import { isNil } from "lodash";
import ArrowCaretDownIcon from "../assets/svgr/ArrowCaretDownIcon";
import Button from "./Button";
import {
  Borders,
  cssBorders,
  cssHorizontalSizing,
  cssSizing,
  cssSpacing,
  HorizontalSizing,
  MarginSpacing,
} from "../theme";
import InputLabel from "./InputBase/InputLabel";
import Typography from "./Typography";
import { v4 as uuidv4 } from "uuid";

export interface ButtonSelectProps extends MarginSpacing, HorizontalSizing, Borders, React.PropsWithChildren<{}> {
  active?: boolean;
  error?: boolean;
  required?: boolean;
  label?: string;
  tooltipLabel?: string;
  variant?: "standard" | "filled";
  allowRemoveAll?: boolean;
  removeAll?: () => void;
  helperText?: string | null;
  size?: "small" | "medium" | "regular";
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  backgroundColor?: CSSObject["backgroundColor"];
}

const ButtonSelect = memo(
  React.forwardRef<HTMLButtonElement, ButtonSelectProps>((props, ref) => {
    const {
      active,
      error,
      variant,
      helperText,
      allowRemoveAll,
      removeAll,
      children,
      label,
      tooltipLabel,
      width,
      onClick,
      onBlur,
      onFocus,
      id,
      size = "regular",
      required,
      placeholder,
      onKeyDown,
      disabled,
      border,
      borderTop,
      borderBottom,
      borderRight,
      borderLeft,
      borderRadius,
      backgroundColor = "transparent",
      ...remainProps
    } = props;
    const theme = useTheme();
    const uid = useMemo(() => (id ? id : `Sapo-Button-${uuidv4()}`), [id]);
    return (
      <Container width={width} {...remainProps}>
        {!!label && (
          <Fragment>
            {!isNil(label) && (
              <InputLabel asterisk={required} htmlFor={id} data-tip={props.tooltipLabel}>
                {label}
              </InputLabel>
            )}
            {!!allowRemoveAll && (
              <ButtonRemoveAll onClick={removeAll} variant="text">
                {theme.i18n("remove_all")}
              </ButtonRemoveAll>
            )}
          </Fragment>
        )}
        <StyledButton
          type="button"
          size={size}
          variant={variant}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
          error={error}
          active={active}
          id={uid}
          disabled={disabled}
          onKeyDown={onKeyDown}
          border={border}
          borderRadius={borderRadius}
          borderRight={borderRight}
          borderLeft={borderLeft}
          borderBottom={borderTop}
          borderTop={borderBottom}
          backgroundColor={backgroundColor}
        >
          {children ? children : <Typography color={theme.palette.ink["40"]}>{placeholder}</Typography>}
          <StyledArrowCaretIcon size={size} active={active ? "true" : "false"} variant={variant} />
        </StyledButton>
        {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
      </Container>
    );
  })
);

ButtonSelect.displayName = "ButtonSelect";
export default ButtonSelect;

const HelperText = styled.p<{ error?: boolean }>`
  ${({ theme }) => theme.typography.body2};
  margin: 0;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme }) => theme.pxToRem(12)} 0;
  color: ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.ink["60"])};
`;

const Container = styled.div<Partial<ButtonSelectProps> & { _width?: CSSObject["width"] }>`
  display: inline-flex;
  position: relative;
  flex: none;
  flex-direction: column;
  ${(props) => cssSizing(props)}
  ${(props) => cssSpacing(props)}
`;

const ButtonRemoveAll = styled(Button)`
  height: ${({ theme }) => theme.pxToRem(20)};
  padding: 0;
  ${({ theme }) => theme.typography.body1};
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledArrowCaretIcon = styled(ArrowCaretDownIcon)<Pick<ButtonSelectProps, "variant"> & { active: string }>`
  position: absolute;
  right: ${({ theme, size, variant }) => (variant === "standard" ? 0 : theme.pxToRem(size === "small" ? 2 : 12))};
  top: 50%;
  height: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(24)};
  transform: translate(0, -50%) ${({ active }) => (active === "true" ? "rotate(180deg)" : null)};
  color: ${({ active, theme }) => (active === "true" ? theme.palette.primary.main : theme.palette.ink["40"])};
`;

const StyledButton = styled.button<Partial<ButtonSelectProps>>`
  ${({ theme }) => theme.typography["body1"]};
  display: block;
  padding: ${({ theme, size }) => theme.pxToRem(size === "small" ? 0 : 8)} ${({ theme, size }) =>
  theme.pxToRem((size === "small" ? 2 : 12) + 24)} ${({ theme, size }) => theme.pxToRem(size === "small" ? 0 : 8)} ${({
  theme,
}) => theme.pxToRem(12)};
  height: ${({ theme, size }) => theme.pxToRem(size === "small" ? 30 : size === "medium" ? 36 : 40)};
  ${({ variant }) => {
    if (variant === "standard")
      return css`
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
        padding-left: 0;
        padding-right: ${({ theme }) => theme.pxToRem(24)};
      `;
    return css`
      border: 1px solid ${({ theme }) => theme.palette.stroke};
      border-radius: 3px;
    `;
  }};
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? "none" : undefined)};
  background: ${({ theme, disabled, backgroundColor }) => (disabled ? theme.palette.ink["20"] : backgroundColor)};
  
  color: ${({ theme, children, disabled }) =>
    children ? (disabled ? theme.palette.ink["60"] : theme.palette.ink.main) : theme.palette.ink["40"]};

  &:focus-visible {
    outline: none;
  }

  ${({ active, error }) => {
    if (error)
      return css`
        border-color: ${({ theme }) => theme.palette.error.main};
      `;
    return active
      ? css`
          border-color: ${({ theme }) => theme.palette.primary.main};
        `
      : css`
          &:hover {
            border-color: ${({ theme }) => theme.palette.black["60"]};
          }
        `;
  }}
  
  ${(props) => cssHorizontalSizing(props)}

  ${(props) => cssBorders(props)}
}`;
