import React, { FocusEventHandler, memo, MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { debounce, isNil } from "lodash";
import { v4 as uuidv4 } from "uuid";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import InputLabel from "./InputBase/InputLabel";
import Fieldset from "./InputBase/Fieldset";
import { cssSpacing, Spacing } from "../theme";

export interface NumberFieldProps extends Spacing {
  value?: number | null | undefined;
  defaultValue?: number | string;
  onChange: (values: number | undefined) => void;
  variant?: "outlined" | "standard";
  isAllowed?: (values: NumberFormatValues) => boolean;
  allowNegative?: boolean;
  decimalScale?: number;
  thousandSeparator?: boolean | string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  helperText?: string | null;
  autoFocus?: boolean;
  id?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  debounceTimeout?: number;
  disabledDebounce?: boolean;
  disabledAutoSelect?: boolean;
  align?: "left" | "center" | "right";
  tooltip?: string | number | JSX.Element;
  width?: string;
}

const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
  (
    {
      allowNegative,
      decimalScale,
      isAllowed,
      label,
      required,
      onChange,
      error,
      helperText,
      autoFocus,
      onFocus,
      onBlur,
      onClick,
      placeholder,
      variant = "outlined",
      disabled,
      id,
      debounceTimeout = 300,
      disabledDebounce,
      align = "right",
      disabledAutoSelect,
      thousandSeparator = true,
      ...props
    },
    ref
  ) => {
    const uid = useMemo(() => (id ? id : `Sapo-NumberField-${uuidv4()}`), [id]);
    const [value, setValue] = useState(props.value);
    const debouncedChangeHandler = useMemo(
      () =>
        debounce(
          (input) => {
            onChange?.(input);
          },
          disabledDebounce ? 0 : debounceTimeout
        ),
      [onChange]
    );

    useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    useEffect(() => {
      return () => {
        debouncedChangeHandler.cancel();
      };
    }, [debouncedChangeHandler]);

    const handleChange = useCallback(
      (values, sourceInfo) => {
        if (sourceInfo.source === "event") {
          debouncedChangeHandler(values.floatValue);
        }
        setValue(values.floatValue);
      },
      [debouncedChangeHandler]
    );

    const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
      !disabledAutoSelect && event.target.select();
      onFocus && onFocus(event);
    };

    return (
      <NumberFieldContainer {...props}>
        {!isNil(label) && (
          <InputLabel asterisk={required} htmlFor={uid} data-tip={props.tooltip}>
            {label}
          </InputLabel>
        )}
        <InputRoot variant={variant} disabled={disabled}>
          <Input
            error={error}
            value={value}
            defaultValue={props.defaultValue}
            onValueChange={handleChange}
            decimalScale={decimalScale}
            allowNegative={allowNegative}
            id={uid}
            disabled={disabled}
            placeholder={placeholder}
            thousandSeparator={thousandSeparator}
            decimalSeparator="."
            autoFocus={autoFocus}
            onBlur={onBlur}
            onClick={onClick}
            onFocus={focusHandler}
            isAllowed={isAllowed}
            ref={ref as any}
            variant={variant}
            style={{ textAlign: align }}
          />
          <Fieldset variant={variant} error={error} />
        </InputRoot>
        {!isNil(helperText) && (
          <HelperText variant={variant} error={error}>
            {helperText}
          </HelperText>
        )}
      </NumberFieldContainer>
    );
  }
);

export const HelperText = styled.p<Pick<NumberFieldProps, "error" | "variant">>`
  ${({ theme }) => theme.typography.body2};
  margin: 0;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme, variant }) => theme.pxToRem(variant === "outlined" ? 12 : 0)};
  color: ${({ theme, error }) => (error ? "#EE4747" : theme.palette.ink["60"])};
  font-size: ${({ theme }) => theme.pxToRem(12)};
`;

export const Input = styled(NumberFormat)<Pick<NumberFieldProps, "variant" | "error">>`
  background: ${({ variant }) => (variant === "standard" ? "transparent" : "#ffffff")};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pxToRem(10)} ${({ theme, variant }) => theme.pxToRem(variant === "outlined" ? 12 : 0)}
    ${({ theme }) => theme.pxToRem(10)} ${({ theme, variant }) => theme.pxToRem(variant === "outlined" ? 12 : 0)};
  width: 100%;
  height: ${({ theme, variant }) => (variant === "standard" ? theme.pxToRem(20) : "100%")};
  border: none;
  text-align: right;

  ${({ theme }) => theme.typography.body1}
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.ink["40"]};
  }

  color: ${({ theme, error, variant }) => (error && variant === "standard" ? "#FF4D4D" : theme.palette.ink.main)};
  ${({ disabled }) =>
    disabled
      ? css`
          &::placeholder {
            color: ${({ theme }) => theme.palette.ink["60"]};
          }
          background: ${({ theme }) => theme.palette.ink["20"]};
          color: ${({ theme }) => theme.palette.ink["60"]};
        `
      : null}
`;

export const InputRoot = styled.div<Pick<NumberFieldProps, "disabled" | "variant">>`
  position: relative;
  height: ${({ theme, variant }) => (variant === "standard" ? theme.pxToRem(20) : theme.pxToRem(40))};
  width: 100%;
  display: flex;
  ${({ disabled }) =>
    disabled
      ? null
      : css`
          &:hover > fieldset {
            border-color: ${({ theme }) => theme.palette.ink["60"]};
          }

          &:focus-within > fieldset {
            border-color: ${({ theme }) => theme.palette.primary.main};
          }
        `}
`;

export const NumberFieldContainer = styled.div<Partial<NumberFieldProps>>`
  max-width: ${({ width }) => (width ? width : "")};
  min-width: ${({ width }) => (width ? width : "")};
  ${(props) => cssSpacing(props)}
`;

NumberField.displayName = "NumberField";
export { NumberField };
export default memo(NumberField);
