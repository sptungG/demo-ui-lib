import React, {
  FocusEventHandler,
  memo,
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled, { css, useTheme } from "styled-components";
import { debounce, isNil } from "lodash";
import { v4 as uuidv4 } from "uuid";
import InputLabel from "./InputBase/InputLabel";
import Fieldset from "./InputBase/Fieldset";
import { cssMargin, MarginSpacing } from "../theme";

export interface TextareaProps extends MarginSpacing {
  value: string | null | undefined;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  helperText?: string | null;
  autoFocus?: boolean;
  id?: string;
  onClick?: MouseEventHandler<HTMLTextAreaElement>;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  maxLength?: number;
  rows?: 1 | 3;
  debounceTimeout?: number;
  disabledDebounce?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
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
    id,
    startIcon,
    endIcon,
    disabled,
    maxLength,
    rows = 3,
    debounceTimeout = 300,
    disabledDebounce,
    ...remainProps
  } = props;
  const theme = useTheme();
  const uid = useMemo(() => (id ? id : `Sapo-Textarea-${uuidv4()}`), [id]);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

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
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value as string);
      debouncedChangeHandler(event.target.value);
    },
    [debouncedChangeHandler]
  );

  useMemo(() => {
    const text = document.getElementById(uid);
    if (!text) return;
    text.style.height = theme.pxToRem(rows === 1 ? 40 : 72);
    let adjustedHeight = text.clientHeight;
    adjustedHeight = Math.max(text.scrollHeight, adjustedHeight);
    adjustedHeight = Math.min(100, adjustedHeight);
    text.style.height = theme.pxToRem(adjustedHeight);
  }, [rows, value, uid]);

  return (
    <StyledTextarea {...remainProps}>
      {!isNil(label) && (
        <InputLabel asterisk={required} htmlFor={uid}>
          {label}
        </InputLabel>
      )}
      <InputRoot disabled={disabled}>
        {!!startIcon && <IconRoot>{startIcon}</IconRoot>}
        <Input
          value={isNil(value) ? "" : value}
          onChange={handleChange}
          id={uid}
          disabled={disabled}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          startIcon={startIcon}
          maxLength={maxLength}
          endIcon={endIcon}
          ref={ref}
          style={{ height: theme.pxToRem(rows === 1 ? 40 : 72) }}
        />
        <Fieldset error={error} />
        {!!endIcon && <IconRoot>{endIcon}</IconRoot>}
      </InputRoot>
      {helperText && <HelperText error={error}>{helperText}</HelperText>}
    </StyledTextarea>
  );
});

Textarea.displayName = "Textarea";
export default memo(Textarea);

const IconRoot = styled.div`
  pointer-events: none;
  transform: translate(0, -50%);
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.pxToRem(12)};
  color: ${(p) => p.theme.palette.ink["40"]};
`;

const HelperText = styled.p<{ error?: boolean }>`
  ${({ theme }) => theme.typography.body2};
  margin: 0;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme }) => theme.pxToRem(12)} 0;
  color: ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.ink["60"])};
`;

const Input = styled.textarea<Pick<TextareaProps, "startIcon" | "endIcon" | "disabled">>`
  resize: none;
  background: ${({ disabled, theme }) => (disabled ? theme.palette.ink["20"] : "#fff")};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pxToRem(10)} ${({ theme, endIcon }) => theme.pxToRem(endIcon ? 40 : 12)}
    ${({ theme }) => theme.pxToRem(10)} ${({ theme, startIcon }) => theme.pxToRem(startIcon ? 40 : 12)};
  width: 100%;
  border: none;
  min-height: ${({ theme }) => theme.pxToRem(40)};
  max-height: ${({ theme }) => theme.pxToRem(100)};

  ${({ theme }) => theme.typography.body1}
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.ink["40"]};
  }

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.pxToRem(6)};
    height: ${({ theme }) => theme.pxToRem(8)};
    background-color: ${({ theme }) => theme.palette.ink["20"]};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.pxToRem(6)};
    background-color: ${({ theme }) => theme.palette.ink["40"]};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.ink["20"]};
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

const InputRoot = styled.div<Pick<TextareaProps, "disabled">>`
  position: relative;
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

const StyledTextarea = styled.div<Partial<TextareaProps>>`
  width: 100%;
  ${(props) => cssMargin(props)}
`;
