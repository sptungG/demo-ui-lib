import React, { Fragment, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ButtonSelectProps } from "./ButtonSelect";
import styled, { css, CSSObject, useTheme } from "styled-components";
import { Placement } from "@popperjs/core";
import { isArray, isEmpty, isEqual, isNil, some, unionBy } from "lodash";
import Popover from "./Popover";
import SelectItem from "./SelectItem";
import Typography from "./Typography";
import useDebounce from "../hooks/useDebounce";
import Chip from "./Chip";
import EditSearchIcon from "../assets/svgr/EditSearchIcon";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";
import { ArrowCaretDownIcon, ArrowShortLeftIcon, ArrowShortRightIcon, OffCloseIcon } from "../assets/svgr";
import Button from "./Button";
import IconButton from "./IconButton";
import { cssBorders, cssHorizontalSizing, cssSizing, cssSpacing } from "../theme";
import InputLabel from "./InputBase/InputLabel";
import useTooltip from "../hooks/useTooltip";

export interface DataSource {
  data: any[];
  limit: number;
  total: number;
}

export interface FilterTagProps {
  //The page from 0
  fetchOptions?: (query: string, page: number) => Promise<DataSource | undefined>;
  renderOption: (option: any) => string;
  value: any | any[] | null | undefined;
  onChange: (value: any) => void;
  uniqueKey?: string;
  label?: string;
  placeholder?: string;
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
  highlight?: boolean;
  disabled?: boolean;
  pageable?: boolean;
  isTag?: boolean;
  require?: boolean;
}

const FilterTag = (props: React.PropsWithChildren<FilterTagProps>) => {
  const theme = useTheme();
  const {
    uniqueKey = "id",
    placeholderSearch = theme.i18n("search"),
    multiple,
    id,
    label,
    placeholder,
    error,
    helperText,
    fetchOptions,
    renderValue,
    onChange,
    renderOption,
    popperWidth,
    placement,
    searchable,
    value,
    textNoResult = theme.i18n("no_result"),
    inline,
    highlight,
    disabled,
    pageable,
    isTag,
    require,
  } = props;
  const uid = useMemo(() => (id ? id : `Sapo-FilterTag-${uuidv4()}`), [id]);
  const refOptions = useRef<any[]>([]);
  const isChanging = useRef<boolean>(true);
  const didMountRef = useRef(false);
  const activatorRef = useRef<any>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chipListRef = useRef<HTMLInputElement | null>(null);
  const containerListItemRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [metaData, setMetaData] = useState({
    currentPage: 0,
    totalPage: 0,
    totalItems: 0,
  });

  const rebuildTooltip = useTooltip();
  const version = useRef(0);
  const queryDebounce = useDebounce(query, 300);
  const refT = useRef<any>();

  useEffect(() => {
    rebuildTooltip();
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
        const res = fetchOptions
          ? await fetchOptions(queryDebounce, page)
          : ({
              data: [],
              limit: 0,
              total: 0,
            } as DataSource);
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
    await handleQueryChange(metaData.currentPage + 1);
  }, [handleQueryChange, metaData.currentPage]);

  const handlePrevPage = useCallback(async () => {
    await handleQueryChange(metaData.currentPage - 1);
  }, [handleQueryChange, metaData.currentPage]);

  const handleClose = useCallback(() => {
    const isOptionSearch = refOptions.current.length;
    version.current = 0;
    setOpen(false);
    setIsLoading(true);
    setIsFocused(false);
    setOptions([]);
    setQuery("");
    setMetaData({ currentPage: 0, totalPage: 0, totalItems: 0 });
    if (isTag && query) {
      if (isOptionSearch) return;
      if (isNil(value) || (isArray(value) && value.filter((i) => i === query).length === 0)) {
        isNil(value) ? handleChange([query]) : handleChange([...value, query]);
      }
    }
  }, [version, query, value]);

  const handleClick = useCallback(() => {
    setOpen((prev) => {
      if (!prev) {
        setIsFocused(true);
        handleQueryChange(0).then(() => {
          inputRef.current?.focus();
        });
      }
      return !prev;
    });
  }, [value, handleQueryChange, inline, inputRef]);

  const handleEventChangeQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    isChanging.current = true;
    setQuery(event.target.value);
  }, []);

  const textValue = useMemo(() => {
    if (renderValue) return renderValue(value);
    if (isNil(value) || (isArray(value) && isEmpty(value))) return placeholder;
    if (isArray(value)) {
      return (
        <TagList>
          {value.map((item, index) =>
            index > 2 && !isFocused ? null : index === 2 && !isFocused ? (
              <Chip
                ref={chipListRef}
                maxWidth="100%"
                key={value.length - index}
                mr={1.5}
                mb={1}
                size="small"
                label={`+${value.length - index}`}
              />
            ) : (
              <Chip
                ref={chipListRef}
                maxWidth="100%"
                key={index}
                mr={1.5}
                mb={1}
                size="small"
                label={renderOption(item)}
                onDelete={() => {
                  handleRemoveValue(item);
                  refT?.current?.update();
                }}
              />
            )
          )}
        </TagList>
      );
    } else {
      return renderOption(value);
    }
  }, [value, placeholder, renderValue, renderOption, isFocused]);

  const isSelected = useCallback(
    (option: any) => {
      if (isNil(value)) return false;
      if (isTag) return !!value?.some((m: any) => compareItem(m, option));
      if (multiple && isArray(value) && !!value.filter((e: any) => e[uniqueKey] === option[uniqueKey])?.[0])
        return true;
      return (value as any)[uniqueKey] === option[uniqueKey];
    },
    [value, uniqueKey, multiple]
  );

  const compareItem = (item: any, other: any) => {
    if (isTag) {
      return item === other;
    }
    return uniqueKey ? (item as any)[uniqueKey] === (other as any)[uniqueKey] : isEqual(item, other);
  };
  const handleChange = useCallback(
    (options: any) => {
      onChange(options);
      refT?.current?.update();
      if (!multiple) setOpen(false);
    },
    [onChange, multiple]
  );

  const handleSelect = useCallback(
    (event: any, idSelected: any) => {
      const options = refOptions.current;
      // eslint-disable-next-line eqeqeq
      let option: any[];
      if (isTag) {
        option = options.filter((e: any) => e === idSelected)?.[0];
      } else {
        option = options.filter((e: any) => e[uniqueKey] === idSelected)?.[0];
      }
      if (!option) return;
      if (multiple) {
        clearFocus();
        if (isNil(value)) {
          handleChange([option]);
        } else if (isArray(value)) {
          if (isTag) {
            if (!value?.some((m) => compareItem(m, option))) {
              handleChange([...value, option]);
            }
          } else {
            if (!value.filter((e: any) => e[uniqueKey] === (option as any)[uniqueKey])?.[0]) {
              handleChange([...value, option]);
            } else {
              handleChange(value.filter((e: any) => e[uniqueKey] !== (option as any)[uniqueKey]));
            }
          }
        }
      } else {
        handleChange(option);
      }
    },
    [handleChange, clearFocus, value, multiple]
  );

  const handleRemoveAll = useCallback(() => {
    setOpen(false);
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
        if (activatorRef?.current.contains(relatedTarget)) {
          return;
        }
      }
      //setOpen(false);
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
            if (isTag && query) {
              if (isNil(value) || (isArray(value) && value.filter((i) => i === query).length === 0)) {
                isNil(idFocus)
                  ? isNil(value)
                    ? handleChange([query])
                    : handleChange([...value, query])
                  : handleSelect({}, idFocus);
              }
              setQuery("");
            } else {
              if (idFocus === "-1") {
                handleClose();
              } else handleSelect({}, idFocus);
            }
          }, 10);
          break;
        default:
          break;
      }
    },
    [uid, handleChange, handleSelect, multiple, handleClose, query]
  );

  const isSelectedAll = useMemo(
    () => !!value && !!options && !options.some((option) => isArray(value) && !some(value, option)),
    [value, options]
  );

  const isIndeterminate = useMemo(
    () => isArray(value) && !!options && value.length < options.length && value.length > 0,
    [value, options]
  );

  const handleSelectAll = useCallback(() => {
    if (isSelectedAll) {
      handleChange(isArray(value) ? value.filter((val) => !some(options, val)) : []);
    } else {
      handleChange(unionBy(options, value as any[], uniqueKey));
    }
    refT?.current?.update();
  }, [handleChange, isSelectedAll, options, value]);

  const handleRemoveValue = useCallback(
    (item: any) => {
      if (isArray(value))
        onChange(value?.filter((e: any) => renderOption(e).toLowerCase() !== renderOption(item).toLowerCase()) || null);
      setOpen(false);
    },
    [value, onChange]
  );

  const Content = (
    <Fragment>
      {!!searchable && (
        <Toolbar isFocused={isFocused}>
          {!isTag && <StyledEditSearchIcon />}
          <Input
            value={query}
            onChange={handleEventChangeQuery}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder={isTag ? "Nhập tại đây" : placeholderSearch}
            autoFocus
            ref={inputRef}
          />
          {query !== "" && (
            <StyledCloseButton
              size="small"
              variant="text"
              onClick={() => {
                setQuery("");
              }}
            >
              <OffCloseIcon className={"closeIcon"} size="small" />
            </StyledCloseButton>
          )}
        </Toolbar>
      )}
      {!isTag && !!multiple && options.length > 0 && (
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
      <ListItem ref={containerListItemRef}>
        {options.length > 0 ? (
          <DataItem>
            {options.map((item) => (
              <SelectItem
                selected={isSelected(item)}
                onSelect={handleSelect}
                value={isTag ? item : (item as any)[uniqueKey]}
                key={isTag ? item : (item as any)[uniqueKey]}
                checkbox={multiple && !isTag}
              >
                <Typography
                  align="left"
                  color={isSelected(item) ? "primary" : "default"}
                  noWrap
                  data-tip={renderOption(item)}
                >
                  {renderOption(item)}
                </Typography>
              </SelectItem>
            ))}
          </DataItem>
        ) : isLoading ? (
          <> </>
        ) : (
          fetchOptions && <TextNoResult>{textNoResult}</TextNoResult>
        )}
        {options.length > 0 && pageable ? (
          <Bottom>
            {!!pageable && (
              <Pagination>
                <ButtonPrevNext disabled={metaData.currentPage <= 0} variant="outlined" onClick={handlePrevPage} mr={3}>
                  <ArrowShortLeftIcon color={metaData.currentPage <= 0 ? "#A3A8AF" : ""} />
                </ButtonPrevNext>
                <ButtonPrevNext
                  disabled={metaData.currentPage >= metaData.totalPage - 1}
                  variant="outlined"
                  onClick={handleNextPage}
                >
                  <ArrowShortRightIcon color={metaData.currentPage >= metaData.totalPage - 1 ? "#A3A8AF" : ""} />
                </ButtonPrevNext>
              </Pagination>
            )}
          </Bottom>
        ) : null}
      </ListItem>
    </Fragment>
  );

  return (
    <Fragment>
      {
        <Container width="100%" ref={activatorRef}>
          {!!label && (
            <Fragment>
              {!isNil(label) && (
                <InputLabel asterisk={require} htmlFor={id}>
                  {label}
                </InputLabel>
              )}
              {!!(multiple && isArray(value) && value.length > 0) && (
                <ButtonRemoveAll onClick={handleRemoveAll} variant="text">
                  {theme.i18n("remove_all")}
                </ButtonRemoveAll>
              )}
            </Fragment>
          )}
          <StyledButton onClick={handleClick} error={error} active={highlight || open} id={id} disabled={disabled}>
            {textValue ? textValue : <Typography color={theme.palette.ink["40"]}>{placeholder}</Typography>}
            <StyledArrowCaretIcon size="regular" active={highlight || open ? "true" : "false"} />
          </StyledButton>
          {helperText ? <HelperText error={error}>{helperText}</HelperText> : null}
        </Container>
      }
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
          ref={refT}
        >
          {Content}
        </Popover>
      )}
    </Fragment>
  );
};
export default memo(FilterTag);

const StyledBoxContent = styled(Box)`
  margin-top: ${({ theme }) => theme.pxToRem(4)};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
`;
const OptionAll = styled.div`
  padding: 0 ${({ theme }) => theme.pxToRem(4)};
  border-bottom: 1px solid ${(p) => p.theme.palette.ink["20"]};
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

const Toolbar = styled.div<{ isFocused: boolean }>`
  display: flex;
  align-items: center;
  padding: ${(p) => p.theme.pxToRem(6)} ${(p) => p.theme.pxToRem(12)};
  border-bottom: 1px solid ${(p) => p.theme.palette.ink["20"]};
  border: ${({ isFocused, theme }) => (isFocused ? "1px solid #0088FF !important" : "")};
`;

const Input = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.pxToRem(20)};
  background: transparent;
  padding: 0 ${({ theme }) => theme.pxToRem(4)};
  box-sizing: border-box;
  border: none;
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
const TagList = styled.div`
  flex-direction: column;
  gap: 3em;
  display: inline-block;
  box-sizing: border-box;
  height: ${({ theme }) => theme.pxToRem(22)};
  position: relative;
  width: 100%;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  padding: ${(p) => p.theme.pxToRem(10)} 0;
`;
const ButtonPrevNext = styled(Button)<{ disabled: boolean }>`
  height: ${(p) => p.theme.pxToRem(20)};
  width: ${(p) => p.theme.pxToRem(20)};
  min-width: unset;
  padding: 0;
  border-radius: 1px;
  svg {
    height: ${(p) => p.theme.pxToRem(20)};
  }
  border: ${({ disabled }) => (disabled ? "1px solid #a3a8af" : "")};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
`;
const Bottom = styled.div`
  padding: 0 ${(p) => p.theme.pxToRem(12)};
  border-top: 2px solid ${(p) => p.theme.palette.ink["20"]};
`;

const DataItem = styled.div`
  max-height: 150px;
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
const StyledCloseButton = styled(IconButton)`
  position: absolute;
  padding: 0;
  right: ${({ theme }) => theme.pxToRem(24)};
  color: ${({ theme }) => theme.palette.ink["40"]};
  &:hover {
    background: ${({ theme }) => theme.palette.ink[20]};
  }
  margin-right: ${({ theme }) => theme.pxToRem(-14)};
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

const StyledButton = styled.button<Partial<ButtonSelectProps>>`
  ${({ theme }) => theme.typography["body1"]};
  display: block;
  padding: ${({ theme }) => theme.pxToRem(8)} ${({ theme }) => theme.pxToRem(20)} ${({ theme }) =>
  theme.pxToRem(8)} ${({ theme }) => theme.pxToRem(12)};
  min-height: ${({ theme }) => theme.pxToRem(40)};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: 3px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden auto;
  position: relative;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? "none" : undefined)};
  background: ${({ theme, disabled }) => (disabled ? theme.palette.ink["20"] : "#fff")};
  max-height: ${({ theme }) => theme.pxToRem(120)};
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
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.pxToRem(6)};
    height: ${({ theme }) => theme.pxToRem(8)};
    background-color: ${({ theme }) => theme.palette.ink["20"]};
  }
  cursor: pointer;
  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.pxToRem(6)};
    background-color: ${({ theme }) => theme.palette.ink["40"]};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.ink["20"]};
  }
}`;
const StyledArrowCaretIcon = styled(ArrowCaretDownIcon)<{ active: string }>`
  position: absolute;
  right: ${({ theme, size }) => theme.pxToRem(size === "small" ? 2 : 12)};
  top: 50%;
  height: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(24)};
  transform: translate(0, -50%) ${({ active }) => (active === "true" ? "rotate(180deg)" : null)};
  color: ${({ active, theme }) => (active === "true" ? theme.palette.primary.main : theme.palette.ink["40"])};
`;
const HelperText = styled.p<{ error?: boolean }>`
  ${({ theme }) => theme.typography.body2};
  margin: 0;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme }) => theme.pxToRem(12)} 0;
  color: ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.ink["60"])};
`;
