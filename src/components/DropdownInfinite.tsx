import React, { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ButtonSelect from "./ButtonSelect";
import styled, { CSSObject, useTheme } from "styled-components";
import { Placement } from "@popperjs/core";
import { isArray, isEmpty, isNil } from "lodash";
import Popover from "./Popover";
import SelectItem from "./SelectItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Typography from "./Typography";
import useDebounce from "../hooks/useDebounce";
import Chip from "./Chip";
import EditSearchIcon from "../assets/svgr/EditSearchIcon";
import CircularProgress from "./CircularProgress";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";

export interface DataSource {
  data: any[];
  limit: number;
  total: number;
}

export interface DropdownInfiniteProps {
  //The page from 0
  fetchOptions: (query: string, page: number) => Promise<DataSource | undefined>;
  renderOption: (option: any) => React.ReactNode;
  value: any | any[] | null | undefined;
  onChange: (value: any) => void;
  creatable?: boolean;
  onClickCreate?: () => any;
  uniqueKey?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string | null;
  multiple?: boolean;
  renderValue?: (selected: any | any[] | null) => React.ReactNode;
  popperWidth?: CSSObject["width"];
  placement?: Placement;
  id?: string;
  searchable?: boolean;
  placeholderSearch?: string;
  textNoResult?: string;
  inline?: boolean;
  renderActivator?: (props: ActivatorDropdownInfiniteProps) => React.ReactNode;
  highlight?: boolean;
  disabled?: boolean;
  backgroundColor?: CSSObject["backgroundColor"];
}

export interface ActivatorDropdownInfiniteProps {
  value: any | null | undefined;
  reference: React.MutableRefObject<any>;
  onClick: () => void;
  query: string;
  onQueryChange: (query: string) => void;
  open: boolean;
}

const DropdownInfinite = (props: React.PropsWithChildren<DropdownInfiniteProps>) => {
  const theme = useTheme();
  const {
    uniqueKey = "id",
    placeholderSearch = theme.i18n("search"),
    multiple,
    id,
    label,
    placeholder,
    required,
    error,
    helperText,
    fetchOptions,
    renderValue,
    onChange,
    renderOption,
    popperWidth,
    placement,
    creatable,
    searchable,
    onClickCreate,
    value,
    textNoResult = theme.i18n("no_result"),
    inline,
    highlight,
    disabled,
    renderActivator,
    backgroundColor,
  } = props;
  const uid = useMemo(() => (id ? id : `Sapo-DropdownInfinite-${uuidv4()}`), [id]);
  const refOptions = useRef<any[]>([]);
  const isChanging = useRef<boolean>(true);
  const didMountRef = useRef(false);
  const activatorRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerListItemRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const [metaData, setMetaData] = useState({
    currentPage: 0,
    totalPage: 0,
    totalItems: 0,
  });
  const version = useRef(0);
  const queryDebounce = useDebounce(query, 300);

  useEffect(() => {
    refOptions.current = options;
  });

  useEffect(() => {
    if (didMountRef.current && open) {
      handleQueryChange(0);
    } else {
      didMountRef.current = true;
    }
  }, [queryDebounce]);

  const handleQueryChange = useCallback(
    async (page = metaData.currentPage, append = false) => {
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
          setOptions((prev) => (append ? [...prev, ...res.data] : res.data));
          if (!append) {
            let wrapper = containerListItemRef.current?.querySelector(".InfiniteScroll-ListItem");
            if (wrapper) wrapper.scrollTop = 0;
          }
          setTimeout(() => {
            let listSuggestItem = containerListItemRef.current?.querySelectorAll(`[data-event='true']`);
            if (!append && listSuggestItem && listSuggestItem.length > 0 && res.data) {
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
        setIsLoading(false);
      }
    },
    [fetchOptions, metaData.currentPage, queryDebounce]
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
    await handleQueryChange(metaData.currentPage + 1, true);
  }, [handleQueryChange, metaData.currentPage]);

  const handleClose = useCallback(() => {
    version.current = 0;
    setOpen(false);
    setIsLoading(true);
    setOptions([]);
    setMetaData({ currentPage: 0, totalPage: 0, totalItems: 0 });
    setQuery("");
  }, [version]);

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

  const textValue = useMemo(() => {
    if (renderValue) return renderValue(value);
    if (isNil(value) || (isArray(value) && isEmpty(value))) return placeholder;
    if (isArray(value)) {
      return value.map((e) => renderOption(e)).join(", ");
    } else {
      return renderOption(value);
    }
  }, [value, placeholder, renderValue, renderOption]);

  const isSelected = useCallback(
    (option: any) => {
      if (isNil(value)) return false;
      if (multiple && isArray(value) && !!value.filter((e: any) => e[uniqueKey] === option[uniqueKey])?.[0])
        return true;
      return (value as any)[uniqueKey] === option[uniqueKey];
    },
    [value, uniqueKey, multiple]
  );

  const handleChange = useCallback(
    (options: any) => {
      onChange(options);
      if (!multiple) setOpen(false);
    },
    [onChange, multiple]
  );

  const handleSelect = useCallback(
    (event: any, idSelected: any) => {
      const options = refOptions.current;
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
    [handleChange, clearFocus, value, multiple]
  );

  const handleRemoveAll = useCallback(() => {
    handleChange([]);
  }, [handleChange]);

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
                listSuggestItem[indexFocus].scrollIntoView({ behavior: "smooth", block: "center", inline: "start" });
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
            } else handleSelect({}, idFocus);
          }, 10);
          break;
        default:
          break;
      }
    },
    [uid, handleChange, onClickCreate, handleSelect, multiple, handleClose]
  );

  const Activator = useMemo(() => {
    return renderActivator?.({
      open: open,
      query: query,
      onQueryChange: handleChangeQuery,
      reference: activatorRef,
      value: value,
      onClick: handleClick,
    });
  }, [renderActivator, activatorRef, handleChangeQuery, open, value, handleClick]);

  const Content = (
    <Fragment>
      {!!searchable && (
        <Toolbar>
          <StyledEditSearchIcon />
          <Input
            value={query}
            onChange={handleEventChangeQuery}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder={placeholderSearch}
            autoFocus
            ref={inputRef}
          />
          {multiple && isArray(value) && value.length > 0 ? (
            <Chip size="small" label={`Đã chọn ${value.length}`} onDelete={handleRemoveAll} />
          ) : null}
        </Toolbar>
      )}
      <ListItem ref={containerListItemRef}>
        {options.length > 0 ? (
          <InfiniteScroll
            dataLength={options.length}
            next={handleNextPage}
            hasMore={metaData.currentPage < metaData.totalPage - 1}
            loader={
              <Box display="flex" alignItems="center" justifyContent="center" py={2}>
                <CircularProgress />
              </Box>
            }
            height={"auto"}
            style={{ maxHeight: 300, overflow: "hidden auto" }}
            className="Sapo-InfiniteScroll__ListItem"
          >
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
          </InfiniteScroll>
        ) : isLoading ? (
          <> </>
        ) : (
          <TextNoResult>{textNoResult}</TextNoResult>
        )}
      </ListItem>
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
          required={required}
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
          width={popperWidth || theme.pxToRem(activatorRef.current?.clientWidth || 0)}
          data-list={uid}
        >
          {Content}
        </Popover>
      )}
    </Fragment>
  );
};
export default memo(DropdownInfinite);

const StyledBoxContent = styled(Box)`
  margin-top: ${({ theme }) => theme.pxToRem(4)};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
`;

const ListItem = styled.div`
  .Sapo-InfiniteScroll__ListItem {
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
  }
,
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

const TextNoResult = styled(Typography)`
  padding: ${(p) => p.theme.pxToRem(6)} ${(p) => p.theme.pxToRem(8)};
  margin: ${(p) => p.theme.pxToRem(4)};
  color: ${(p) => p.theme.palette.ink["60"]};
`;
