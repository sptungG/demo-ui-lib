import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import _, { isNil } from "lodash";
import InputLabel from "./InputBase/InputLabel";
import Fieldset from "./InputBase/Fieldset";
import Popover from "./Popover";
import { DataSource } from "./DropdownInfinite";
import InfiniteScroll from "react-infinite-scroll-component";
import Box from "./Box";
import CircularProgress from "./CircularProgress";
import SelectItem from "./SelectItem";
import useDebounce from "../hooks/useDebounce";
import { Placement } from "@popperjs/core";
import { v4 as uuidv4 } from "uuid";
import useTooltip from "../hooks/useTooltip";
import { OffCloseIcon, PlusCircleIcon } from "../assets/svgr";
import IconButton from "./IconButton";
import Typography from "./Typography";
import SvgPlusCircleIcon from "../assets/svgr/PlusCircleIcon";

export interface AutoCompleteInfiniteProps extends React.PropsWithChildren<{}> {
  fetchOptions: (filter: any) => Promise<DataSource | undefined>;
  label?: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  helperText?: string | null;
  debounceTimeout?: number;
  disabledDebounce?: boolean;
  placement?: Placement;
  id?: string;
  renderOption: (option: any) => any;
  textNoResult?: string;
  textAdd?: string;
  createable?: boolean;
  value: any | null | undefined;
  onChange: (value: any | null | undefined) => void;
  onSubmit?: (query: string, value: any | null | undefined, options: any[]) => void;
  onClickCreate?: (value: string) => void;
  onQueryChange?: (filter: { page: number; limit: number; query: string }) => any;
  limit?: number;
  uniqKey?: any;
  disabled?: boolean;
  "data-tip"?: string | number;
}
interface AutocompleteInfiniteRef {
  //todo
}

const AutoCompleteInfinite = React.forwardRef<AutocompleteInfiniteRef, AutoCompleteInfiniteProps>(
  (props, ref) => {
    const theme = useTheme();
    const {
      label,
      required,
      onChange,
      error,
      helperText,
      placeholder,
      textNoResult = theme.i18n("no_result"),
      textAdd = theme.i18n("text_add"),
      createable,
      onSubmit,
      onClickCreate,
      onQueryChange,
      placement,
      fetchOptions,
      id,
      limit = 10,
      debounceTimeout = 0,
      renderOption,
      uniqKey = "id",
      disabled,
    } = props;
    const uid = useMemo(() => (id ? id : `Sapo-AutoCompleteInfinite-${uuidv4()}`), [id]);
    const containerListItemRef = useRef<HTMLDivElement | null>(null);
    const refOptions = useRef<any[]>([]);
    const isChanging = useRef<boolean>(true);
    const didMountRef = useRef(false);

    const [open, setOpen] = useState(false);
    const activatorRef = useRef<any>(null);
    const [value, setValue] = useState<any | null | undefined>(props.value || null);
    const [query, setQuery] = useState<string>(
      _.isNil(props.value?.[uniqKey]) ? "" : props.value?.[uniqKey]?.toString()
    );
    const [options, setOptions] = useState<string[]>([]);
    const [metaData, setMetaData] = useState({
      currentPage: 0,
      totalPage: 0,
      totalItems: 0,
    });
    const queryDebounce = useDebounce(query, debounceTimeout);
    const rebuildTooltip = useTooltip();

    React.useImperativeHandle(ref, () => ({
      open() {
        setOpen(true);
      },
      close() {
        setOpen(false);
        setMetaData({ currentPage: 1, totalPage: 0, totalItems: 0 });
      },
      setValue(value: any) {
        setValue(value);
      },
    }));

    useEffect(() => {
      refOptions.current = options;
      rebuildTooltip();
    });

    useEffect(() => {
      if (didMountRef.current && open) {
        handleQueryChange(1, false);
      } else {
        didMountRef.current = true;
      }
    }, [queryDebounce, open]);

    const handleQueryChange = async (page = metaData.currentPage, append = false) => {
      if (fetchOptions) {
        const filter = await Promise.resolve(
          onQueryChange?.({ page: page, query: queryDebounce, limit: limit }) || {
            page: page,
            query: queryDebounce,
            limit: limit,
          }
        );
        fetchOptions(filter).then((res) => {
          if (res?.data) {
            isChanging.current = false;
            setOpen(true);
            setMetaData({
              currentPage: page,
              totalPage: Math.ceil(res.total / res.limit),
              totalItems: res.total,
            });
            setOptions((prev) => (append ? [...prev, ...res.data] : res.data));
            if (!append) {
              const wrapper = containerListItemRef.current?.querySelector(
                ".InfiniteScroll-ListItem"
              );
              if (wrapper) wrapper.scrollTop = 0;
            }
            setTimeout(() => {
              const listSuggestItem =
                containerListItemRef.current?.querySelectorAll(`[data-event='true']`);
              if (!append && listSuggestItem && listSuggestItem.length > 0 && res.data) {
                listSuggestItem.forEach((item) => {
                  if (item.classList.contains("focused")) {
                    item.classList.remove("focused");
                  }
                });
              }
            }, 10);
          }
        });
      }
    };

    const handleNextPage = useCallback(async () => {
      await handleQueryChange(metaData.currentPage + 1, true);
    }, [handleQueryChange, metaData.currentPage]);

    const handleEventChangeQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    };

    const handleClosePopover = useCallback(
      async (event?: any) => {
        if (event?.relatedTarget) {
          const relatedTarget = event.relatedTarget as HTMLElement;
          if (relatedTarget?.getAttribute("key-event") === "true") {
            return;
          }
        }
        onSubmit?.(query, value, options);
        setOpen(false);
        setMetaData({ currentPage: 1, totalPage: 0, totalItems: 0 });
      },
      [queryDebounce, value, options]
    );
    const handleClick = () => {
      setOpen(true);
      handleQueryChange();
    };

    const handleSelect = useCallback((event: any, idSelected: any) => {
      if (idSelected) {
        onChange(idSelected);
        setOpen(false);
        setMetaData({ currentPage: 1, totalPage: 0, totalItems: 0 });
      }
    }, []);
    useEffect(() => {
      setQuery(_.isNil(props.value) ? "" : renderOption(props.value));
      if (open) {
        if (!_.isEqual(value?.[uniqKey], props.value?.[uniqKey])) {
          setValue(props.value);
        }
      }
    }, [props.value, open]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case "ArrowDown":
        case "ArrowUp":
          const parentNode = document.querySelector(`[wrapper-suggest='${uid}']`);
          const itemFocus = parentNode?.querySelector(".focus-key-event");
          const listSuggestItem = parentNode?.querySelectorAll(`[key-event='true']`);
          if (listSuggestItem && itemFocus) {
            const sizeItems = listSuggestItem.length;
            for (let i = 0; i < sizeItems; i++) {
              const item = listSuggestItem[i];
              if (item.classList.contains("focus-key-event")) {
                item.classList.remove("focus-key-event");
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
                listSuggestItem[indexFocus].classList.add("focus-key-event");
                break;
              }
            }
          } else if (listSuggestItem && listSuggestItem.length > 0 && event.key === "ArrowDown") {
            listSuggestItem[0].classList.add("focus-key-event");
          }
          break;
        case "Enter":
          const optionFocus = document.querySelector(`[wrapper-suggest='${uid}'] .focus-key-event`);
          optionFocus && handleClosePopover();
          const idFocus = optionFocus?.getAttribute("data-id");
          const newValue = options.find((e) => e[uniqKey]?.toString() === idFocus);
          newValue && handleSelect(null, newValue);
          break;
        default:
          break;
      }
    };

    return (
      <StyledAutoCompleteInfinite>
        {!isNil(label) && (
          <InputLabel asterisk={required} htmlFor={uid} data-tip={props["data-tip"]}>
            {label}
          </InputLabel>
        )}
        <InputRootContainer ref={activatorRef} disabled={disabled}>
          <Input
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            autoComplete={"off"}
            value={query}
            onChange={handleEventChangeQuery}
            placeholder={placeholder}
            //onBlur={handleClosePopover}
            disabled={disabled}
          />
          <Fieldset error={error} />
          {query !== "" && (
            <StyledCloseButton
              size="small"
              variant="text"
              onClick={() => {
                if (!disabled) {
                  setQuery("");
                  onSubmit?.("", value, options);
                }
              }}
            >
              <OffCloseIcon className={"closeIcon"} size="small" />
            </StyledCloseButton>
          )}
        </InputRootContainer>
        <Popover
          open={open}
          onClose={handleClosePopover}
          reference={activatorRef}
          placement={placement}
          width={
            400 > (activatorRef.current?.clientWidth || 0)
              ? theme.pxToRem(activatorRef.current?.clientWidth)
              : theme.pxToRem(400)
          }
          data-list={uid}
        >
          {options.length > 0 ? (
            <ListItem ref={containerListItemRef}>
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
                {options.map((item, idx) => (
                  <SelectItem
                    selected={item === value}
                    onSelect={handleSelect}
                    value={item}
                    key={idx}
                    checkbox={false}
                  >
                    {renderOption(item)}
                  </SelectItem>
                ))}
              </InfiniteScroll>
            </ListItem>
          ) : (
            <ListItem>
              {createable && (
                <Item
                  onClick={() => {
                    onClickCreate?.(query);
                    setOpen(false);
                    setMetaData({ currentPage: 1, totalPage: 0, totalItems: 0 });
                  }}
                >
                  <StyledIconPlusButton size="small">
                    <PlusCircleIcon />
                  </StyledIconPlusButton>{" "}
                  <TextAdd> {textAdd} </TextAdd> <TextNameAdd> {query}</TextNameAdd>
                </Item>
              )}
              <TextNoResult>{textNoResult}</TextNoResult>
            </ListItem>
          )}
        </Popover>
        <HelperText error={error}>{helperText}</HelperText>
      </StyledAutoCompleteInfinite>
    );
  }
);
AutoCompleteInfinite.displayName = "AutoCompleteInfinite";
export default memo(AutoCompleteInfinite);

const HelperText = styled.p<{ error?: boolean }>`
  ${({ theme }) => theme.typography.body2};
  margin: 0;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme }) => theme.pxToRem(12)} 0;
  color: ${({ theme, error }) => (error ? theme.palette.error.main : theme.palette.ink["60"])};
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
`;

const Input = styled.input`
  background: ${({ disabled, theme }) => (disabled ? theme.palette.ink["20"] : "#fff")};
  resize: none;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pxToRem(10)} ${({ theme }) => theme.pxToRem(12)}
    ${({ theme }) => theme.pxToRem(10)} ${({ theme }) => theme.pxToRem(12)};
  width: 100%;
  border: none;
  min-height: ${({ theme }) => theme.pxToRem(40)};
  max-height: ${({ theme }) => theme.pxToRem(60)};
  ${({ theme }) => theme.typography.body1}
  &:focus-visible {
    outline: none;
  }
  padding-right: 35px;
  &::placeholder {
    color: ${({ theme }) => theme.palette.ink["40"]};
  }

  color: ${({ theme }) => theme.palette.ink.main};
`;

const InputRootContainer = styled.div<Pick<AutoCompleteInfiniteProps, "disabled">>`
  position: relative;
  max-height: ${({ theme }) => theme.pxToRem(134)};
  &:focus-within > fieldset {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }
  background: ${({ disabled, theme }) => (disabled ? theme.palette.ink["20"] : "#fff")};
`;

const StyledAutoCompleteInfinite = styled.div`
  width: 100%;
`;
const StyledCloseButton = styled(IconButton)`
  position: absolute;
  padding: 0;
  right: ${({ theme }) => theme.pxToRem(24)};
  color: ${({ theme }) => theme.palette.ink["40"]};
  top: ${({ theme }) => theme.pxToRem(8)};
  &:hover {
    background: ${({ theme }) => theme.palette.primary["10"]};
  }
  margin-right: ${({ theme }) => theme.pxToRem(-14)};
`;
const TextNoResult = styled(Typography)`
  padding: ${(p) => p.theme.pxToRem(6)} ${(p) => p.theme.pxToRem(8)};
  margin: ${(p) => p.theme.pxToRem(4)};
  color: ${(p) => p.theme.palette.ink["60"]};
`;
const Item = styled.button`
  display: flex;
  padding: ${(p) => p.theme.pxToRem(6)} ${(p) => p.theme.pxToRem(8)};
  margin: ${(p) => p.theme.pxToRem(4)};
  cursor: pointer;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
`;
const StyledIconPlusButton = styled(SvgPlusCircleIcon)`
  color: ${({ theme }) => theme.palette.primary["main"]};
`;

const TextAdd = styled(Typography)`
  color: ${(p) => p.theme.palette.primary.main};
  font-weight: ${(p) => p.theme.typography.fontWeightMedium};
  margin-left: ${(p) => p.theme.pxToRem(4)};
`;

const TextNameAdd = styled(Typography)`
  color: ${(p) => p.theme.palette.text.primary};
  font-weight: ${(p) => p.theme.typography.fontWeightMedium};
  margin-left: ${(p) => p.theme.pxToRem(4)};
`;
