import React, {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import TextField, { TextFieldProps } from "./TextField";
import EditSearchIcon from "../assets/svgr/EditSearchIcon";
import styled, { css } from "styled-components";
import Button from "./Button";
import OffCloseIcon from "../assets/svgr/OffCloseIcon";
import { isEmpty, isNil } from "lodash";
import { cssMargin, HorizontalSizing, MarginSpacing } from "../theme";

export interface SearchBoxProps extends MarginSpacing, HorizontalSizing {
  id?: string;
  value: string | null | undefined;
  onChange?: (value: string) => void;
  onSubmit?: (value: string, type: "clear-button" | "enter") => void;
  placeholder?: string;
  autoFocus?: boolean;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  withBtn?: boolean;
  disabledClearBtn?: boolean;
  textBtn?: React.ReactNode;
  onClickBtn?: MouseEventHandler<HTMLButtonElement>;
  maxLength?: number;
  inputProps?: Partial<TextFieldProps>;
}

export interface SearchBoxRef extends HTMLDivElement {}

const SearchBox = React.forwardRef<SearchBoxRef, SearchBoxProps>(
  (
    {
      id,
      mt,
      ml,
      mb,
      mr,
      mx,
      my,
      margin,
      maxLength,
      onChange,
      withBtn,
      value,
      disabledClearBtn,
      textBtn,
      onClickBtn,
      onKeyDown,
      onSubmit,
      onBlur,
      maxWidth,
      width,
      minWidth,
      inputProps,
      ...props
    },
    ref
  ) => {
    const [_value, setValue] = useState<string>(value ? value : "");
    React.useEffect(() => {
      setValue(value ? value : "");
    }, [value]);
    const handleChange = useCallback(
      (value: string) => {
        setValue(value);
        onChange?.(value);
      },
      [onChange]
    );
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(event);
        event.key === "Enter" && onSubmit?.(event.currentTarget.value, "enter");
      },
      [onSubmit, onKeyDown]
    );
    const startIcon = useMemo(() => <StartIcon />, []);
    const endIcon = useMemo(
      () =>
        disabledClearBtn || isNil(value) || isEmpty(value.trim()) ? null : (
          <EndIcon
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onSubmit ? onSubmit("", "clear-button") : onChange?.("");
            }}
          />
        ),
      [disabledClearBtn, value, onSubmit, onChange]
    );
    return (
      <StyledSearchBox
        width={width}
        maxWidth={maxWidth}
        minWidth={minWidth}
        ref={ref}
        margin={margin}
        ml={ml}
        mr={mr}
        mt={mt}
        mb={mb}
        mx={mx}
        my={my}
        id={id}
      >
        <TextFieldStyle
          value={_value}
          withBtn={withBtn}
          {...props}
          {...inputProps}
          onChange={handleChange}
          startIcon={startIcon}
          endIcon={endIcon}
          maxLength={maxLength}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
        />
        {!!withBtn && (
          <StyledButton onClick={onClickBtn} variant="outlined">
            {textBtn}
          </StyledButton>
        )}
      </StyledSearchBox>
    );
  }
);

export default SearchBox;

const StartIcon = styled(EditSearchIcon)`
  height: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(24)};
  pointer-events: none;
`;

const EndIcon = styled(OffCloseIcon)`
  height: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(24)};
  cursor: pointer;
`;

const StyledSearchBox = styled.div<Partial<SearchBoxProps>>`
  display: flex;
  width: 100%;
  flex: 1;
  ${(props) => cssMargin(props)}
`;

const TextFieldStyle = styled(TextField)<Pick<SearchBoxProps, "withBtn">>`
  & > .Sapo-InputRoot {
    height: ${({ theme }) => theme.pxToRem(36)};
  }
  ${({ withBtn }) =>
    withBtn
      ? css`
          fieldset {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
        `
      : null}
`;

const StyledButton = styled(Button)`
  flex: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: ${({ theme }) => theme.palette.ink.main};
  border-color: ${({ theme }) => theme.palette.stroke};
  ${({ theme }) => theme.typography["subtitle1"]};
  border-left: none;
`;
