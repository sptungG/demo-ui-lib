import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  memo,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled, { css, CSSObject } from "styled-components";
import { debounce, isNil } from "lodash";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "./InputBase/InputLabel";
import Fieldset from "./InputBase/Fieldset";
import { cssHorizontalSizing, cssMargin, HorizontalSizing, MarginSpacing } from "../theme";

export interface TextFieldProps extends HorizontalSizing, MarginSpacing {
  value: string | null | undefined;
  onChange: (value: string) => void;
  variant?: "outlined" | "standard";
  label?: string;
  placeholder?: string;
  error?: boolean;
  type?: "text" | "password";
  required?: boolean;
  helperText?: string | null;
  autoFocus?: boolean;
  id?: string;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  tooltip?: string | number | JSX.Element;
  focused?: boolean;
  maxLength?: number;
  debounceTimeout?: number;
  disabledDebounce?: boolean;
  size?: "small" | "medium";
  backgroundColor?: CSSObject["backgroundColor"];
  autoComplete?: "on" | "off";
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    label,
    required,
    onChange,
    error,
    type = "text",
    helperText,
    autoFocus,
    onFocus,
    onBlur,
    onClick,
    placeholder,
    id,
    startIcon,
    endIcon,
    disabled,
    focused,
    maxLength,
    debounceTimeout = 300,
    disabledDebounce,
    variant = "outlined",
    width = "100%",
    minWidth,
    maxWidth,
    onKeyDown,
    size,
    backgroundColor = "transparent",
    autoComplete = "on",
    ...remainProps
  } = props;
  const uid = useMemo(() => (id ? id : `Sapo-TextField-${uuidv4()}`), [id]);
  const [value, setValue] = useState(props.value);

  const _setValue = (newValue: any) => {
    setValue(newValue);
  };

  useEffect(() => {
    _setValue(props.value);
  }, [props.value]);

  const debouncedChangeHandler = useMemo(
    () =>
      debounce((input) => {
        onChange?.(input);
      }, debounceTimeout),
    [onChange]
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value as string);
      if (disabledDebounce) {
        onChange?.(event.target.value);
      } else {
        debouncedChangeHandler(event.target.value);
      }
    },
    [debouncedChangeHandler]
  );

  return (
    <StyledTextField
      {...remainProps}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      className={(props as any).className}
    >
      {!isNil(label) && (
        <InputLabel asterisk={required} htmlFor={uid} data-tip={props.tooltip}>
          {label}
        </InputLabel>
      )}
      <InputRoot className="Sapo-InputRoot" disabled={disabled} size={size}>
        {!!startIcon && <StartIconRoot>{startIcon}</StartIconRoot>}
        <Input
          ref={ref}
          value={isNil(value) ? "" : value}
          onChange={handleChange}
          id={uid}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          startIcon={startIcon}
          endIcon={endIcon}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          variant={variant}
          backgroundColor={backgroundColor}
          autoComplete={autoComplete}
        />
        <Fieldset variant={variant} error={error} focused={focused} />
        {!!endIcon && <EndIconRoot>{endIcon}</EndIconRoot>}
      </InputRoot>
      {helperText && (
        <HelperText variant={variant} error={error}>
          {helperText}
        </HelperText>
      )}
    </StyledTextField>
  );
});

TextField.displayName = "TextField";
export default memo(TextField);

const IconRoot = styled.div`
  transform: translate(0, -50%);
  position: absolute;
  top: 50%;
  color: ${(p) => p.theme.palette.ink["40"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartIconRoot = styled(IconRoot)`
  left: ${({ theme }) => theme.pxToRem(12)};
`;

const EndIconRoot = styled(IconRoot)`
  right: ${({ theme }) => theme.pxToRem(12)};
`;

const HelperText = styled.p<Pick<TextFieldProps, "error" | "variant" | "focused">>`
  ${({ theme }) => theme.typography.body2};
  margin: 0;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme, variant }) => theme.pxToRem(variant === "outlined" ? 12 : 0)}
    0;
  color: ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.ink["60"])};
`;

const Input = styled.input<Pick<TextFieldProps, "startIcon" | "endIcon" | "disabled" | "variant" | "backgroundColor">>`
  background: ${({ disabled, theme, backgroundColor }) => (disabled ? theme.palette.ink["20"] : backgroundColor)};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pxToRem(10)}
    ${({ theme, endIcon, variant }) => theme.pxToRem(endIcon ? 40 : 12 - (variant === "outlined" ? 0 : 12))}
    ${({ theme }) => theme.pxToRem(10)}
    ${({ theme, startIcon, variant }) => theme.pxToRem(startIcon ? 40 : 12 - (variant === "outlined" ? 0 : 12))};
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 3px;

  ${({ theme }) => theme.typography.body1}
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.ink["40"]};
  }

  color: ${({ theme }) => theme.palette.ink.main};
  ${({ disabled }) =>
    disabled
      ? css`
          &::placeholder {
            color: ${({ theme }) => theme.palette.ink["60"]};
          }

          color: ${({ theme }) => theme.palette.ink["60"]};
        `
      : null}
`;

const InputRoot = styled.div<Pick<TextFieldProps, "disabled" | "size">>`
  position: relative;
  height: ${({ theme, size }) => (size === "small" ? theme.pxToRem(30) : theme.pxToRem(40))};
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

const StyledTextField = styled.div<Partial<TextFieldProps>>`
  ${(props) => cssHorizontalSizing(props)}
  ${(props) => cssMargin(props)}
`;
