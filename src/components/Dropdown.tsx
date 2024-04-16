import React, {
  FocusEventHandler,
  Fragment,
  memo,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { CSSObject, useTheme } from "styled-components";
import { isArray, isEmpty, isNil, some } from "lodash";
import Popover from "./Popover";
import { v4 as uuidv4 } from "uuid";
import ButtonSelect, { ButtonSelectProps } from "./ButtonSelect";
import SelectItem from "./SelectItem";
import { Placement, PositioningStrategy } from "@popperjs/core";
import { HorizontalSizing, MarginSpacing } from "../theme";
import Box from "./Box";
import Typography from "./Typography";

export interface DropdownProps extends MarginSpacing, HorizontalSizing {
  options: any[] | null | undefined;
  variant?: "standard" | "filled";
  renderOption: (option: any) => React.ReactNode;
  value: any | any[] | null | undefined;
  open?: boolean;
  onChange: (value: any) => void;
  label?: string;
  tooltipLabel?: string;
  uniqueKey?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string | null;
  multiple?: boolean;
  renderValue?: (selected: any | any[] | null) => React.ReactNode;
  placement?: Placement;
  strategy?: PositioningStrategy;
  size?: "small" | "regular" | "medium";
  id?: string;
  popperWidth?: CSSObject["width"];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onFocus?: FocusEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  inline?: boolean;
  renderActivator?: (props: ActivatorDropdownProps) => React.ReactNode;
  highlight?: boolean;
  buttonProps?: Partial<ButtonSelectProps>;
  onClose?: () => void;
  disabled?: boolean;
  disabledSelectAll?: boolean;
  disabledDeleteAll?: boolean;
  disabledOptions?: any[] | null;
  backgroundColor?: CSSObject["backgroundColor"];
}

export type ActivatorDropdownProps = {
  reference: React.MutableRefObject<any>;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => any;
  open: boolean;
};

const Dropdown = ({
  uniqueKey = "id",
  options,
  variant = "filled",
  renderOption,
  multiple,
  placeholder,
  value,
  onChange,
  renderValue,
  id,
  onClick,
  onBlur,
  onFocus,
  onClose,
  label,
  open: openPopover = true,
  helperText,
  error,
  popperWidth,
  placement,
  strategy,
  width = "100%",
  minWidth,
  maxWidth,
  size = "regular",
  required,
  renderActivator,
  highlight,
  inline,
  disabled,
  buttonProps,
  tooltipLabel,
  disabledSelectAll,
  disabledDeleteAll,
  disabledOptions,
  backgroundColor,
  ...props
}: DropdownProps) => {
  const theme = useTheme();
  const uid = useMemo(() => uuidv4(), []);
  const idListItem = useMemo(() => `Sapo-Select__ListItem-${uuidv4()}`, []);
  const activatorRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  let listItemRef: any = null;
  let firstSelectedRef: any = null;
  useEffect(() => {
    listItemRef = document.getElementById(idListItem);
    firstSelectedRef = value
      ? listItemRef?.querySelector(
          `[data-value='${isArray(value) ? value[0]?.[uniqueKey] : value[uniqueKey]}']`
        )
      : undefined;
  });

  const handleClose = useCallback(() => {
    setOpen(false);
    onClose?.();
  }, [onClose]);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      setOpen((prev) => !prev);
    },
    [onClick]
  );

  useEffect(() => {
    if (open && firstSelectedRef && listItemRef) {
      listItemRef.scrollTop = (firstSelectedRef as any).offsetTop - listItemRef.offsetHeight / 2;
    }
  }, [open]);

  const handleRemoveAll = useCallback(() => {
    onChange([]);
  }, [onChange]);

  const isSelectedAll = useMemo(
    () => !!value && !!options && !options.some((option) => isArray(value) && !some(value, option)),
    [value, options]
  );

  const isIndeterminate = useMemo(
    () => isArray(value) && !!options && value.length < options.length && value.length > 0,
    [value, options]
  );

  const handleSelectAll = useCallback(() => {
    onChange(isSelectedAll ? [] : options);
  }, [onChange, isSelectedAll, options]);

  const textValue = useMemo(() => {
    if (renderValue) return renderValue(value);
    if (isNil(value) || (isArray(value) && isEmpty(value)))
      return <Typography color={theme.palette.ink["40"]}>{placeholder}</Typography>;
    if (isArray(value)) {
      return value.map((e) => renderOption(e)).join(", ");
    } else {
      return renderOption(value);
    }
  }, [value, placeholder, renderValue, renderOption]);

  const isSelected = useCallback(
    (option: any) => {
      if (isNil(value)) return false;
      if (
        multiple &&
        isArray(value) &&
        !!value.filter((e: any) => e[uniqueKey] === option[uniqueKey])?.[0]
      )
        return true;
      return (value as any)[uniqueKey] === option[uniqueKey];
    },
    [value, uniqueKey, multiple]
  );

  const handleSelect = useCallback(
    (event: any, idSelected: any) => {
      if (!options) return;
      // eslint-disable-next-line eqeqeq
      const option = options.filter((e: any) => e[uniqueKey] == idSelected)?.[0];
      if (!option) return;
      if (multiple) {
        if (isNil(value)) {
          onChange([option]);
        } else if (isArray(value)) {
          if (!value.filter((e: any) => e[uniqueKey] === (option as any)[uniqueKey])?.[0]) {
            onChange([...value, option]);
          } else {
            onChange(value.filter((e: any) => e[uniqueKey] !== (option as any)[uniqueKey]));
          }
        }
      } else {
        onChange(option);
        setOpen(false);
        onClose?.();
      }
    },
    [onChange, value, multiple, options]
  );

  const handleKeyDown = useCallback(
    async (event: React.KeyboardEvent<any>) => {
      switch (event.key) {
        case "ArrowDown":
        case "ArrowUp":
          event.preventDefault();
          const parentNode = document.querySelector(`[data-list='${uid}']`);
          const itemFocus = parentNode?.querySelector(".focused");
          const listSuggestItem = parentNode?.querySelectorAll(`[data-event='true']`);
          if (listSuggestItem && itemFocus) {
            const sizeItems = listSuggestItem.length;
            for (let i = 0; i < sizeItems; i++) {
              const item = listSuggestItem[i];
              if (item.classList.contains("focused")) {
                item.classList.remove("focused");
                let indexFocus = i;
                if (event.key === "ArrowDown") {
                  indexFocus = i !== sizeItems - 1 ? i + 1 : 0;
                } else {
                  indexFocus = i !== 0 ? i - 1 : 0;
                }
                setTimeout(() => {
                  listSuggestItem[indexFocus].scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "start",
                  });
                  listSuggestItem[indexFocus].classList.add("focused");
                });
                break;
              }
            }
          } else if (listSuggestItem && listSuggestItem.length > 0 && event.key === "ArrowDown") {
            listSuggestItem[0].classList.add("focused");
          }
          break;
        case "Enter":
          event.preventDefault();
          const optionFocus = document.querySelector(`[data-list='${uid}'] .focused`);
          const idFocus = optionFocus?.getAttribute("data-value");
          if (idFocus === "all") {
            handleSelectAll();
          } else handleSelect({}, idFocus);
          break;
        default:
          break;
      }
    },
    [uid, handleSelect, handleSelectAll]
  );

  const Content = (
    <Fragment>
      {!!multiple && !disabledSelectAll && (
        <OptionAll>
          <SelectItem
            value="all"
            onSelect={handleSelectAll}
            checkbox
            indeterminate={isIndeterminate}
            selected={isSelectedAll}
          >
            {theme.i18n("option_all")}
          </SelectItem>
        </OptionAll>
      )}
      <ListItem
        id={idListItem}
        _width={
          popperWidth
            ? typeof popperWidth === "string"
              ? Number(popperWidth.replace(/px/g, ""))
              : Number(popperWidth)
            : activatorRef.current?.clientWidth
        }
      >
        {options?.map((item) => (
          <SelectItem
            selected={isSelected(item)}
            onSelect={handleSelect}
            value={(item as any)[uniqueKey]}
            key={(item as any)[uniqueKey]}
            checkbox={multiple}
            disabled={disabledOptions?.find((e) => e[uniqueKey] === (item as any)[uniqueKey])}
          >
            {renderOption(item)}
          </SelectItem>
        ))}
      </ListItem>
    </Fragment>
  );

  const Activator = useMemo(() => {
    return renderActivator?.({
      onClick: handleClick,
      open: open,
      reference: activatorRef,
    });
  }, [renderActivator, activatorRef, open, handleClick]);

  return (
    <React.Fragment>
      {Activator ? (
        Activator
      ) : (
        <ButtonSelect
          size={size}
          variant={variant}
          removeAll={handleRemoveAll}
          allowRemoveAll={multiple && !disabledDeleteAll && isArray(value) && value.length > 0}
          active={highlight || open}
          onClick={handleClick}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={activatorRef}
          label={label}
          helperText={helperText}
          error={error}
          width={width}
          minWidth={minWidth}
          maxWidth={maxWidth}
          required={required}
          onKeyDown={handleKeyDown}
          id={id}
          disabled={disabled}
          {...props}
          {...buttonProps}
          tooltipLabel={tooltipLabel}
          backgroundColor={backgroundColor}
        >
          {textValue}
        </ButtonSelect>
      )}
      {inline ? (
        open ? (
          <StyledBoxContent borderRadius="3px" width={popperWidth} data-list={uid}>
            {Content}
          </StyledBoxContent>
        ) : null
      ) : (
        <Popover
          data-list={uid}
          open={!openPopover ? false : open}
          onClose={handleClose}
          reference={activatorRef}
          placement={placement}
          strategy={strategy}
          width={popperWidth}
        >
          {Content}
        </Popover>
      )}
    </React.Fragment>
  );
};
export default memo(Dropdown);

const StyledBoxContent = styled(Box)`
  margin-top: ${({ theme }) => theme.pxToRem(4)};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
`;

const OptionAll = styled.div`
  padding: 0 ${({ theme }) => theme.pxToRem(4)};
  border-bottom: 1px solid ${(p) => p.theme.palette.ink["20"]};
`;

const ListItem = styled.div<{ _width: number | undefined }>`
  max-height: ${({ theme }) => theme.pxToRem(160)};
  /* width: ${({ theme, _width }) => (_width ? theme.pxToRem(_width) : undefined)}; */
  overflow: hidden auto;
  border-radius: 3px;
  padding: 0 ${({ theme }) => theme.pxToRem(4)};
  box-sizing: border-box;

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
`;
