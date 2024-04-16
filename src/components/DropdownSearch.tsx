import React, { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isArray, isEmpty, isNil, some, unionBy } from "lodash";
import styled, { CSSObject, useTheme } from "styled-components";
import Popover from "./Popover";
import Chip from "./Chip";
import ArrowShortLeftIcon from "../assets/svgr/ArrowShortLeftIcon";
import ArrowShortRightIcon from "../assets/svgr/ArrowShortRightIcon";
import SelectItem from "./SelectItem";
import Button from "./Button";
import { Placement } from "@popperjs/core";
import ButtonSelect from "./ButtonSelect";
import useDebounce from "../hooks/useDebounce";
import { DataSource } from "./DropdownInfinite";
import Typography from "./Typography";
import { EditSearchIcon } from "../assets/svgr";
import { v4 as uuidv4 } from "uuid";
import Box from "./Box";

export interface DropdownSearchProps {
  //The page from 0
  fetchOptions: (query: string, page: number) => Promise<DataSource | undefined> | DataSource;
  renderOption: (option: any) => React.ReactNode;
  value: any | any[] | null | undefined;
  hideSearchBox?: boolean;
  onChange: (value: any) => void;
  creatable?: boolean;
  onClickCreate?: () => any;
  uniqueKey?: string;
  label?: string;
  placeholderSearch?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string | null;
  multiple?: boolean;
  changeOnSubmit?: boolean;
  pageable?: boolean;
  renderValue?: (selected: any | any[] | null) => React.ReactNode;
  popperWidth?: CSSObject["width"];
  placement?: Placement;
  id?: string;
  textNoResult?: string;
  inline?: boolean;
  renderActivator?: (props: ActivatorDropdownSearchProps) => React.ReactNode;
  highlight?: boolean;
  disabled?: boolean;
  backgroundColor?: CSSObject["backgroundColor"];
}

export interface ActivatorDropdownSearchProps {
  value: any | null | undefined;
  reference: React.MutableRefObject<any>;
  onClick: () => void;
  onQueryChange: (query: string) => void;
  open: boolean;
}

const DropdownSearch = (props: DropdownSearchProps) => {
  const theme = useTheme();
  const {
    uniqueKey = "id",
    multiple,
    id,
    label,
    hideSearchBox,
    placeholder,
    error,
    helperText,
    fetchOptions,
    renderValue,
    onChange,
    changeOnSubmit,
    renderOption,
    popperWidth,
    creatable,
    onClickCreate,
    placement,
    pageable,
    textNoResult = theme.i18n("no_result"),
    renderActivator,
    highlight,
    inline,
    disabled,
    backgroundColor,
  } = props;
  const uid = useMemo(() => (id ? id : `Sapo-DropdownSearch-${uuidv4()}`), [id]);
  const refOptions = useRef<any[]>([]);
  const isChanging = useRef<boolean>(true);
  const didMountRef = useRef(false);
  const activatorRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerListItemRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const [metaData, setMetaData] = useState({
    currentPage: 0,
    totalPage: 0,
    totalItems: 0,
  });
  const version = useRef(0);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    if (props.value && !multiple && value?.[uniqueKey] === props.value[uniqueKey]) return;
    setValue(props.value);
  }, [props.value]);

  useEffect(() => {
    refOptions.current = options;
  });

  const queryDebounce = useDebounce(query, 300);

  useEffect(() => {
    if (didMountRef.current && open) {
      handleQueryChange(0);
    } else {
      didMountRef.current = true;
    }
  }, [queryDebounce]);

  useEffect(() => {
    if (open && changeOnSubmit) {
      setValue(props.value);
    }
  }, [open]);

  const handleQueryChange = useCallback(
    async (page = metaData.currentPage) => {
      version.current += 1;
      const currentVer = version.current;
      try {
        const res = await fetchOptions(queryDebounce, page);
        if (res?.data) {
          if (currentVer < version.current) return;
          isChanging.current = false;
          setMetaData({
            currentPage: page,
            totalPage: Math.ceil(res.total / res.limit),
            totalItems: res.total,
          });
          setOptions(res.data);
          if (containerListItemRef.current) containerListItemRef.current.scrollTop = 0;
          setTimeout(() => {
            let listSuggestItem =
              containerListItemRef.current?.querySelectorAll(`[data-event='true']`);
            if (listSuggestItem && listSuggestItem.length > 0 && res.data) {
              listSuggestItem.forEach((item) => {
                if (item.classList.contains("focused")) {
                  item.classList.remove("focused");
                }
              });
              if (creatable) {
                let indexFocus = res.data.length === 0 ? 0 : 1;
                listSuggestItem?.[indexFocus]?.classList.add("focused");
              } else {
                listSuggestItem?.[0]?.classList.add("focused");
              }
            }
          }, 10);
        }
      } catch (e) {
      } finally {
      }
    },
    [fetchOptions, creatable, metaData.currentPage, queryDebounce]
  );

  const clearFocus = useCallback(() => {
    let listSuggestItem = containerListItemRef.current?.querySelectorAll(`[data-event='true']`);
    if (listSuggestItem && listSuggestItem.length > 0) {
      listSuggestItem.forEach((item) => {
        if (item.classList.contains("focused")) {
          item.classList.remove("focused");
        }
      });
    }
  }, [containerListItemRef.current]);

  const handleNextPage = useCallback(async () => {
    await handleQueryChange(metaData.currentPage + 1);
  }, [handleQueryChange, metaData.currentPage]);

  const handlePrevPage = useCallback(async () => {
    await handleQueryChange(metaData.currentPage - 1);
  }, [handleQueryChange, metaData.currentPage]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setOptions([]);
    setQuery("");
    version.current = 0;
    setMetaData({ currentPage: 0, totalPage: 0, totalItems: 0 });
  }, []);

  const handleClick = useCallback(() => {
    setOpen((prev) => {
      if (!prev) {
        handleQueryChange(0).then(() => {
          inputRef.current?.focus();
        });
      }
      return !prev;
    });
  }, [value, handleQueryChange, inline, inputRef]);

  const handleChangeQuery = useCallback((query: string) => {
    isChanging.current = true;
    setQuery(query);
  }, []);

  const handleEventChangeQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    isChanging.current = true;
    setQuery(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    onChange(value);
    setQuery("");
    setOpen(false);
  }, [onChange, value]);

  const isSelectedAllInPage = useMemo(
    () => !!value && !options.some((option) => isArray(value) && !some(value, option)),
    [value, options]
  );

  const textValue = useMemo(() => {
    if (renderValue) return renderValue(props.value);
    if (isNil(props.value) || (isArray(props.value) && isEmpty(props.value))) return placeholder;
    if (isArray(props.value)) {
      return props.value.map((e) => renderOption(e)).join(", ");
    } else {
      return renderOption(props.value);
    }
  }, [props.value, placeholder, renderValue, renderOption]);

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

  const handleChange = useCallback(
    (options: any) => {
      setValue(options);
      if (!changeOnSubmit) onChange(options);
      if (!multiple) setOpen(false);
    },
    [onChange, changeOnSubmit, multiple]
  );

  const handleSelect = useCallback(
    (event: any, idSelected: any) => {
      // eslint-disable-next-line eqeqeq
      const option = options.filter((e: any) => e[uniqueKey] == idSelected)?.[0];
      if (!option) return;
      if (multiple) {
        clearFocus();
        if (isNil(value)) {
          handleChange([option]);
        } else if (isArray(value)) {
          if (!value.filter((e: any) => e[uniqueKey] === (option as any)[uniqueKey])?.[0]) {
            handleChange([...value, option]);
          } else {
            handleChange(value.filter((e: any) => e[uniqueKey] !== (option as any)[uniqueKey]));
          }
        }
      } else {
        handleChange(option);
      }
    },
    [handleChange, clearFocus, value, multiple, options]
  );

  const handleSelectAllInPage = useCallback(() => {
    if (isSelectedAllInPage) {
      handleChange(options.filter((option) => isArray(value) && !some(value, option)));
    } else {
      handleChange(unionBy(options, value as any[], uniqueKey));
    }
  }, [options, value, handleChange]);

  const handleRemoveAll = useCallback(() => {
    handleChange([]);
  }, [handleChange]);

  const handleKeyDown = useCallback(
    async (event: React.KeyboardEvent<any>) => {
      switch (event.key) {
        case "ArrowDown":
        case "ArrowUp":
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
                listSuggestItem[indexFocus].scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "start",
                });
                listSuggestItem[indexFocus].classList.add("focused");
                break;
              }
            }
          } else if (listSuggestItem && listSuggestItem.length > 0 && event.key === "ArrowDown") {
            listSuggestItem[0].classList.add("focused");
          }
          break;
        case "Enter":
          let tryTime = 1;
          do {
            tryTime++;
            await new Promise((resolve) => setTimeout(resolve, 5));
          } while (isChanging.current && tryTime < 300);
          setTimeout(() => {
            const optionFocus = document.querySelector(`[data-list='${uid}'] .focused`);
            const idFocus = optionFocus?.getAttribute("data-value");
            if (idFocus === "-1") {
              handleClose();
              onClickCreate?.();
            } else if (idFocus === "all") {
              handleSelectAllInPage();
            } else handleSelect({}, idFocus);
          }, 10);
          break;
        default:
          break;
      }
    },
    [uid, onClickCreate, handleSelectAllInPage, handleSelect, handleClose]
  );

  const handleBlur = useCallback(
    (event: any) => {
      if (inline) return;
      if (event?.relatedTarget) {
        let relatedTarget = event.relatedTarget as HTMLElement;
        if (document.querySelectorAll(`[data-list="${uid}"]`)?.[0]?.contains(relatedTarget)) {
          return;
        }
        if (activatorRef.current.contains(relatedTarget)) {
          return;
        }
      }
      setOpen(false);
    },
    [uid]
  );

  const Activator = useMemo(() => {
    return renderActivator?.({
      onClick: handleClick,
      value: value,
      open: open,
      onQueryChange: handleChangeQuery,
      reference: activatorRef,
    });
  }, [renderActivator, activatorRef, open, value, handleClick]);

  const Content = (
    <Fragment>
      {!hideSearchBox && (
        <Toolbar>
          <StyledEditSearchIcon />
          <Input
            value={query}
            onChange={handleEventChangeQuery}
            onKeyDown={handleKeyDown}
            // onBlur={handleBlur}
            placeholder={theme.i18n("search")}
            autoFocus
            ref={inputRef}
          />
          {multiple && isArray(value) && value.length > 0 ? (
            <Chip
              size="small"
              label={theme.i18n("count_selected", { num: value.length })}
              onDelete={handleRemoveAll}
            />
          ) : null}
        </Toolbar>
      )}
      {options.length > 0 ? (
        <Fragment>
          {!!multiple && (
            <OptionAll>
              <SelectItem
                value="all"
                onSelect={handleSelectAllInPage}
                checkbox
                selected={isSelectedAllInPage}
                indeterminate={!isSelectedAllInPage && isArray(value) && value.length > 0}
              >
                {theme.i18n("option_all")}
              </SelectItem>
            </OptionAll>
          )}
          <ListItem ref={containerListItemRef}>
            {options.map((item) => (
              <SelectItem
                selected={isSelected(item)}
                onSelect={handleSelect}
                value={(item as any)[uniqueKey]}
                key={(item as any)[uniqueKey]}
                checkbox={multiple}
              >
                {renderOption(item)}
              </SelectItem>
            ))}
          </ListItem>
          {pageable || changeOnSubmit ? (
            <Bottom>
              {!!pageable && (
                <Pagination>
                  <ButtonPrevNext
                    disabled={metaData.currentPage <= 0}
                    variant="outlined"
                    onClick={handlePrevPage}
                    mr={3}
                  >
                    <ArrowShortLeftIcon />
                  </ButtonPrevNext>
                  <ButtonPrevNext
                    disabled={metaData.currentPage >= metaData.totalPage - 1}
                    variant="outlined"
                    onClick={handleNextPage}
                  >
                    <ArrowShortRightIcon />
                  </ButtonPrevNext>
                </Pagination>
              )}
              {!!changeOnSubmit && (
                <Button width="100%" onClick={handleSubmit}>
                  {theme.i18n("filter")}
                </Button>
              )}
            </Bottom>
          ) : null}
        </Fragment>
      ) : (
        <TextNoResult>{textNoResult}</TextNoResult>
      )}
    </Fragment>
  );

  return (
    <Fragment>
      {Activator ? (
        Activator
      ) : (
        <ButtonSelect
          active={highlight || open}
          error={error}
          onClick={handleClick}
          ref={activatorRef}
          label={label}
          id={id}
          helperText={helperText}
          width="100%"
          allowRemoveAll={multiple && isArray(value) && value.length > 0}
          removeAll={handleRemoveAll}
          disabled={disabled}
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
          open={open}
          onClose={handleClose}
          reference={activatorRef}
          placement={placement}
          // width={popperWidth || theme.pxToRem(activatorRef.current?.clientWidth || 0)}
          width={popperWidth}
          data-list={uid}
        >
          {Content}
        </Popover>
      )}
    </Fragment>
  );
};

DropdownSearch.displayName = "DropdownSearch";
export default memo(DropdownSearch);

const StyledBoxContent = styled(Box)`
  margin-top: ${({ theme }) => theme.pxToRem(4)};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
`;

const TextNoResult = styled(Typography)`
  padding: ${(p) => p.theme.pxToRem(6)} ${(p) => p.theme.pxToRem(8)};
  margin: ${(p) => p.theme.pxToRem(4)};
  color: ${(p) => p.theme.palette.ink["60"]};
`;

const ButtonPrevNext = styled(Button)`
  height: ${(p) => p.theme.pxToRem(20)};
  width: ${(p) => p.theme.pxToRem(20)};
  min-width: unset;
  padding: 0;
  border-radius: 1px;

  svg {
    height: ${(p) => p.theme.pxToRem(20)};
  }
`;

const OptionAll = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.palette.ink["20"]};
  padding: 0 ${({ theme }) => theme.pxToRem(4)};
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: ${({ theme }) => theme.pxToRem(12)};
`;

const Bottom = styled.div`
  padding: ${(p) => p.theme.pxToRem(12)} ${(p) => p.theme.pxToRem(12)};
  border-top: 2px solid ${(p) => p.theme.palette.ink["20"]};
`;

const StyledEditSearchIcon = styled(EditSearchIcon)`
  height: ${(p) => p.theme.pxToRem(24)};
  width: ${(p) => p.theme.pxToRem(24)};
  flex: none;
  color: ${(p) => p.theme.palette.ink["40"]};
`;

const Toolbar = styled.div`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.pxToRem(6)} ${(p) => p.theme.pxToRem(12)};
  border-bottom: 1px solid ${(p) => p.theme.palette.ink["20"]};
`;

const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(20)};
  border: none;
  background: transparent;
  padding: 0 ${({ theme }) => theme.pxToRem(4)};
  box-sizing: border-box;

  ${({ theme }) => theme.typography.body1}
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.ink["40"]};
  }
`;

const ListItem = styled.div`
  max-height: ${({ theme }) => theme.pxToRem(200)};
  overflow: hidden auto;
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
