import React, { memo, useCallback, useEffect, useMemo, useRef, useState, FocusEventHandler } from "react";
import styled, { css, useTheme } from "styled-components";
import { isArray, isEmpty, isNil } from "lodash";
import InputLabel from "./InputBase/InputLabel";
import Fieldset from "./InputBase/Fieldset";
import Chip from "../components/Chip";
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

export interface TagFieldProps extends React.PropsWithChildren<{}> {
  fetchOptions: (query: string, page: number) => Promise<DataSource | undefined>;
  tags: string[] | null | undefined;
  onChange: (tags: string[] | null) => void;
  label?: string;
  placeholder?: string;
  error?: boolean;
  value: any | any[] | null | undefined;
  required?: boolean;
  helperText?: string | null;
  debounceTimeout?: number;
  disabledDebounce?: boolean;
  placement?: Placement;
  id?: string;
  disabledClearQuery?: boolean;
  disabled?: boolean;
  "data-tip"?: string | number;
  size: "small" | "large" | "regular";
  validateOnChange?: (value: string) => boolean;
}

const TagField = ({
  placement,
  value,
  disabledClearQuery,
  fetchOptions,
  tags,
  id,
  debounceTimeout = 0,
  disabled,
  size,
  validateOnChange,
  ...props
}: TagFieldProps) => {
  const theme = useTheme();
  const uid = useMemo(() => (id ? id : `Sapo-TagField-${uuidv4()}`), [id]);
  const containerListItemRef = useRef<HTMLDivElement | null>(null);
  const refOptions = useRef<any[]>([]);
  const isChanging = useRef<boolean>(true);
  const didMountRef = useRef(false);
  const { label, required, onChange, error, helperText, placeholder } = props;
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const activatorRef = useRef<any>(null);
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [metaData, setMetaData] = useState({
    currentPage: 0,
    totalPage: 0,
    totalItems: 0,
  });
  const version = useRef(0);
  const queryDebounce = useDebounce(query, debounceTimeout);
  const rebuildTooltip = useTooltip();

  useEffect(() => {
    refOptions.current = options;
    rebuildTooltip();
  });

  useEffect(() => {
    if (didMountRef.current && open) {
      handleQueryChange(0);
    } else {
      didMountRef.current = true;
    }
  }, [queryDebounce, open]);

  const handleQueryChange = useCallback(
    async (page = metaData.currentPage, append = false) => {
      version.current += 1;
      const currentVer = version.current;
      try {
        const res = await fetchOptions(queryDebounce, page);
        if (res?.data) {
          if (currentVer < version.current) return;
          isChanging.current = false;
          setOpen(true);
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
      } catch (e) {}
    },
    [fetchOptions, metaData.currentPage, queryDebounce]
  );

  const handleNextPage = useCallback(async () => {
    await handleQueryChange(metaData.currentPage + 1, true);
  }, [handleQueryChange, metaData.currentPage]);

  const handleAddTag = useCallback(
    (newTag: string) => {
      setOpen(false);
      setQuery("");
      if (tags?.some((e) => e.toLowerCase() === newTag.toLowerCase())) return;
      onChange(tags ? [...tags, newTag] : [newTag]);
    },
    [tags, onChange]
  );

  const handleRemoveTag = useCallback(
    (tag: string) => {
      onChange(tags?.filter((e) => e.toLowerCase() !== tag.toLowerCase()) || null);
      setOpen(false);
      setQuery("");
    },
    [tags, onChange]
  );

  const handleEventChangeQuery = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    if (validateOnChange) {
      if (validateOnChange(value)) {
        setQuery(event.target.value);
      }
    } else {
      setQuery(event.target.value);
    }
  }, []);

  const handleSelect = useCallback(
    (event: any, idSelected: string) => {
      const isIncluded = tags?.some((e: any) => e.toLowerCase() === idSelected.toLowerCase());
      isIncluded ? handleRemoveTag(idSelected) : handleAddTag(idSelected);
      setIsFocused(false);
    },
    [handleAddTag, value, tags]
  );

  const handleBlur = useCallback(
    (event: any) => {
      if (event?.relatedTarget) {
        let relatedTarget = event.relatedTarget as HTMLElement;
        if (document.querySelectorAll(`[data-list="${uid}"]`)?.[0]?.contains(relatedTarget)) {
          return;
        }
      } else {
        setIsFocused(false);
      }
      if (query) {
        setTimeout(() => {
          handleAddTag(query);
          setQuery("");
        }, 10);
      }
      setOpen(false);
    },
    [uid, query]
  );

  const handleClose = useCallback(() => {
    version.current = 0;
    setOpen(false);
    setOptions([]);
    setMetaData({ currentPage: 0, totalPage: 0, totalItems: 0 });
  }, [version]);

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
            if (isNil(idFocus) && isEmpty(query)) return;
            isNil(idFocus) ? handleAddTag(query) : handleSelect({}, idFocus);
          }, 10);
          break;
        case "Backspace":
          if (value && isArray(value) && isEmpty(query)) {
            let newOptions = [...value];
            newOptions.pop();
            onChange(newOptions);
            setOpen(false);
          }
          break;
        default:
          break;
      }
    },
    [uid, handleAddTag, query, handleSelect, handleClose]
  );

  const handleClick = useCallback(() => {
    setOpen((prev) => {
      if (!prev) {
        handleQueryChange(0).then(() => {});
        setIsFocused(true);
      }
      return !prev;
    });
  }, [handleQueryChange]);

  return (
    <StyledTagField>
      {!isNil(label) && (
        <InputLabel asterisk={required} htmlFor={uid} data-tip={props["data-tip"]}>
          {label}
        </InputLabel>
      )}
      <InputRootContainer
        ref={activatorRef}
        disabled={disabled}
        size={size}
        onClick={handleClick}
        tabIndex={0}
        onBlur={handleBlur}
      >
        {!!tags && tags.length > 0 && (
          <TagList style={{ width: "100%" }}>
            {tags.map((tag, index) =>
              index > 2 && !isFocused ? null : index === 2 && !isFocused ? (
                <Chip
                  maxWidth="calc(100% - 12px)"
                  key={tags.length - index}
                  mr={1.5}
                  mb={1}
                  size="small"
                  label={`+${tags.length - index}`}
                />
              ) : (
                <Chip
                  maxWidth="calc(100% - 12px)"
                  key={tag}
                  mr={1.5}
                  mb={1}
                  size="small"
                  label={tag}
                  onDelete={() => {
                    handleRemoveTag(tag);
                  }}
                />
              )
            )}
          </TagList>
        )}
        {isFocused && (
          <Input
            onClick={handleClick}
            autoComplete={"off"}
            value={query}
            onChange={handleEventChangeQuery}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            tabIndex={1}
            id={uid}
            autoFocus={isFocused}
          />
        )}
        <Fieldset error={error} focused={isFocused} />
      </InputRootContainer>
      {options.length > 0 && (
        <Popover
          open={open}
          onClose={handleClose}
          reference={activatorRef}
          placement={"bottom-start"}
          data-list={uid}
        >
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
              {options.map((item) => (
                <SelectItem
                  selected={tags?.some((e) => e.toLowerCase() === item.toLowerCase())}
                  onSelect={handleSelect}
                  value={item}
                  key={item}
                >
                  {item}
                </SelectItem>
              ))}
            </InfiniteScroll>
          </ListItem>
        </Popover>
      )}
      <HelperText error={error}>{helperText}</HelperText>
    </StyledTagField>
  );
};
TagField.displayName = "TagField";
export default memo(TagField);

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
,
`;

const Input = styled.input`
  background: ${({ disabled, theme }) => (disabled ? theme.palette.ink["20"] : "#fff")};
  resize: none;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pxToRem(10)} ${({ theme }) => theme.pxToRem(12)} ${({ theme }) => theme.pxToRem(10)}
    ${({ theme }) => theme.pxToRem(12)};
  display: inline-block;
  border: none;
  min-height: ${({ theme }) => theme.pxToRem(40)};
  max-height: ${({ theme }) => theme.pxToRem(60)};

  ${({ theme }) => theme.typography.body1}
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.ink["40"]};
  }

  color: ${({ theme }) => theme.palette.ink.main};
`;

const TagList = styled.div<Partial<TagFieldProps>>`
  padding: ${({ theme }) => theme.pxToRem(6)} ${({ theme }) => theme.pxToRem(0)} ${({ theme }) => theme.pxToRem(6)}
    ${({ theme }) => theme.pxToRem(12)};
  flex-direction: column;
  gap: 3em;
  display: inline-block;
  box-sizing: border-box;
  min-height: ${({ theme }) => theme.pxToRem(40)};
  max-height: ${({ theme }) => theme.pxToRem(134 - 40)};
  position: relative;
  overflow: hidden auto;

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
  background: ${({ disabled, theme }) => (disabled ? theme.palette.ink["20"] : "#fff")};
`;

const InputRootContainer = styled.div<Pick<TagFieldProps, "disabled"> & { size: "small" | "large" | "regular" }>`
  position: relative;
  ${({ size }) => {
    let heightPx = 40;
    if (size === "large") {
      heightPx = 72;
    } else if (size === "regular") {
      heightPx = 56;
    }
    return css`
      min-height: ${({ theme }) => theme.pxToRem(heightPx)};
    `;
  }}
  max-height: ${({ theme }) => theme.pxToRem(134)};
  background: ${({ disabled, theme }) => (disabled ? theme.palette.ink["20"] : "#fff")};
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const StyledTagField = styled.div`
  width: 100%;
`;
