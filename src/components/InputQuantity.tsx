import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { debounce, isNil } from "lodash";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "./InputBase/InputLabel";
import { Spacing } from "../theme";
import { MinusCircleIcon, PlusCircleIcon } from "../assets/svgr";
import { HelperText, Input, InputRoot, NumberFieldContainer, NumberFieldProps } from "./NumberField";
import Fieldset from "./InputBase/Fieldset";

export interface InputQuantityProps extends Spacing, Omit<NumberFieldProps, "variant"> {
  alwaysShowButton?: boolean;
}

const InputQuantity = React.forwardRef<HTMLInputElement, InputQuantityProps>(
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
      disabled = false,
      id,
      debounceTimeout = 300,
      disabledDebounce,
      align,
      disabledAutoSelect,
      thousandSeparator = true,
      alwaysShowButton,
      ...props
    },
    ref
  ) => {
    const uid = useMemo(() => (id ? id : `Sapo-NumberField-${uuidv4()}`), [id]);
    const [value, setValue] = useState(props.value);
    const [hiddenBtn, setHiddenBtn] = useState(false);
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
    const handleKey = (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.keyCode === 40) {
        e.preventDefault();
        onKeyPress("down");
      }
      if (e.keyCode === 38) {
        e.preventDefault();
        onKeyPress("up");
      }
    };
    const handleClickBtn = (name: string) => {
      if (name === "down") {
        onKeyPress("down");
      }
      if (name === "up") {
        onKeyPress("up");
      }
      setTimeout(() => {
        document.getElementById(uid)?.focus();
      });
    };
    const onKeyPress = (key: string) => {
      if (Number(value) > 0 && key === "down") {
        onChange(parseFloat(!isNaN(Number(value)) && Number(value) >= 1 ? (Number(value) - 1).toFixed(3) : "0"));
      }
      if (key === "up") {
        onChange(parseFloat(!isNaN(Number(value)) ? (Number(value) + 1).toFixed(3) : "1"));
      }
    };

    return (
      <NumberFieldContainer {...props}>
        {!isNil(label) && (
          <InputLabel asterisk={required} htmlFor={uid} data-tip={props.tooltip}>
            {label}
          </InputLabel>
        )}
        <InputRoot
          disabled={disabled}
          onMouseOver={() => !disabled && setHiddenBtn(true)}
          onMouseLeave={() => setHiddenBtn(false)}
          style={{ height: 24 }}
        >
          {(hiddenBtn || alwaysShowButton) && (
            <StyledMinusCircleIcon disabled={disabled} onClick={() => !disabled && handleClickBtn("down")} />
          )}
          <StyledInput
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
            style={{
              textAlign: !align ? "center" : align,
            }}
            onKeyDown={handleKey}
            variant="standard"
          />
          {(hiddenBtn || alwaysShowButton) && (
            <StyledPlusCircleIcon disabled={disabled} onClick={() => !disabled && handleClickBtn("up")} />
          )}
          <StyledFieldSet variant="standard" error={error} />
        </InputRoot>
        {!isNil(helperText) && <HelperText error={error}>{helperText}</HelperText>}
      </NumberFieldContainer>
    );
  }
);

const StyledPlusCircleIcon = styled(PlusCircleIcon)<{ disabled: boolean }>`
  color: #a3a8af;
  max-width: 16px;
  min-width: 16px;
  margin-top: 2px;
  cursor: pointer;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
  &:hover > path {
    fill: ${({ disabled }) => (disabled ? "" : "#0088ff")};
  }
`;
const StyledMinusCircleIcon = styled(MinusCircleIcon)<{ disabled: boolean }>`
  color: #a3a8af;
  max-width: 16px;
  min-width: 16px;
  cursor: pointer;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  }
  &:hover > path {
    fill: ${({ disabled }) => (disabled ? "" : "#0088ff")};
  }
`;

const StyledInput = styled(Input)`
  background: transparent;
  width: calc(100% - 38px);
  margin: 0 auto;
  height: ${({ theme }) => theme.pxToRem(20)};
`;

const StyledFieldSet = styled(Fieldset)`
  margin: 0 auto;
  width: calc(100% - 38px);
`;

InputQuantity.displayName = "InputQuantity";
export { InputQuantity };
export default memo(InputQuantity);
