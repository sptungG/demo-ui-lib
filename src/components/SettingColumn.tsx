import _ from "lodash";
import { isNil } from "lodash";
import React, { memo, useEffect, useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { CloseIcon } from "../assets/svgr";
import Box from "./Box";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Dialog, { DialogActions, DialogContent, DialogTitle } from "./Dialog";
import IconButton from "./IconButton";
import { useModal } from "./ModalProvider";
import SearchBox from "./SearchBox";
import Typography from "./Typography";

export interface ColumnGroup {
  label: string;
  columnKeys: String[];
}
export interface Column {
  key: string;
  label: string;
  disable?: boolean;
  defaultSelected?: boolean;
  hidden?: boolean;
  selected?: boolean;
}
export interface SettingColumnProps {
  columnGroups?: ColumnGroup[];
  columns: Column[];
  title?: string;
  description?: string;
  searchable?: boolean;
  sortable?: boolean;
  additionalInfo?: React.ReactNode;
}

export interface SettingColumnRef extends HTMLDivElement {}

const SettingColumn = React.forwardRef<SettingColumnRef, SettingColumnProps>(
  (
    {
      columnGroups,
      title = "Điều chỉnh cột hiển thị",
      description,
      searchable = true,
      sortable,
      additionalInfo,
      columns,
      ...props
    },
    ref
  ) => {
    const refContentBoxHeight = useRef<any>();
    const refContentBox = useRef<any>();
    const loadingRef = useRef<any>(false);
    const { closeModal, dismissModal } = useModal();
    const [forceRerender, setForceRerender] = useState(true);
    const [query, setQuery] = useState<string>("");
    const [selectedColumns, setSelectedColumns] = useState<Column[]>(columns.filter((i) => i.selected));
    const childrenWithProps = React.Children.map(additionalInfo, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child);
      }
      return child;
    });
    const isShow = (col: Column) => {
      if (query?.length) {
        const title = removeVietnameseTones(col.label.toLowerCase());
        const _query = removeVietnameseTones(query.trim().toLowerCase());
        if (!title.includes(_query)) {
          return false;
        }
      }
      return true;
    };

    const isSelected = (column: Column) => {
      return !!selectedColumns.filter((e) => !!e).filter((e) => e.key === column.key)?.[0];
    };

    const handleSelect = (column: Column) => {
      if (column.disable) return;
      setSelectedColumns((prev) => {
        const selectedItem = !!prev.filter((e) => e?.key === column.key)?.[0]
          ? prev.filter((e) => e?.key !== column.key)
          : [...prev, column];
        const selected = selectedItem.filter((item) => !isNil(item));
        if (sortable) return selected;
        return columns.flat().filter((cgi) => selected.some((si) => si.key === cgi.key));
      });
    };

    const onDragEnd = (result: any) => {
      if (!result.destination) {
        return;
      }
      const items = reorder(selectedColumns, result.source.index, result.destination.index);
      setSelectedColumns(items);
    };

    const reorder = (list: Column[], startIndex: any, endIndex: any) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    };
    useEffect(() => {
      if (forceRerender) {
        setForceRerender(false);
      }
    }, [forceRerender]);

    if (!loadingRef.current && (!refContentBox || !refContentBox?.current)) {
      loadingRef.current = true;
      _.debounce(() => {
        setForceRerender(true);
        loadingRef.current = false;
      }, 300)();
    }
    if (refContentBox?.current?.clientHeight && !refContentBoxHeight?.current) {
      refContentBoxHeight.current = refContentBox?.current?.clientHeight;
    }
    const handleReset = () => {
      const cols = columns.filter((e) => e.defaultSelected);
      setSelectedColumns(cols);
      setQuery("");
    };

    const handleSaveColumns = () => {
      const cols = columns.map((e) => e.key);
      let keys = selectedColumns.filter((e) => !!e).map((e) => e.key);
      let listSetting: any = {};
      cols.forEach((keyDefault) => {
        if (Object.keys(listSetting).findIndex((m) => m === keyDefault) < 0) {
          listSetting[keyDefault] = false;
        }
      });
      keys.forEach((key) => {
        listSetting[key] = true;
      });
      closeModal({ ...listSetting });
    };

    return (
      <Dialog>
        <DialogTitle divider>
          <Box display="flex">
            <Typography variant="h4" mb="4px">
              {title}
            </Typography>
            {description ? <Typography color="secondary">{description}</Typography> : null}
          </Box>
        </DialogTitle>
        <DialogContent padding="0px">
          <Container ref={refContentBox}>
            <Box border="1px solid #D3D5D7" borderRadius="6px" width="calc(50% - 12px)" height="100%">
              <Typography padding="16px" color="#000000" fontWeight="medium" variant="h6">
                Thêm cột hiển thị
              </Typography>
              <Box maxHeight="calc(100dvh - 360px)" borderTop="1px solid #f3f4f5">
                {searchable && (
                  <Box padding="8px 16px 4px 16px">
                    <SearchBox
                      value={query}
                      placeholder="Tìm kiếm cột hiển thị"
                      onChange={(value: string) => {
                        setQuery(value);
                      }}
                    />
                  </Box>
                )}
                <BoxMenuList refContentBoxHeight={refContentBoxHeight}>
                  <>
                    <Box padding={0} pt={0} pb={0}>
                      <MenuList>
                        {columns
                          .filter((e) => isShow(e) && !e.hidden)
                          .map((column, index) => {
                            let columns: String[] = [];
                            columnGroups?.map((item) => item.columnKeys.map((i) => columns.push(i)));
                            if (columns.find((item) => item === column.key)) {
                              return null;
                            }
                            return (
                              <MenuItem
                                key={`items-${index}`}
                                onClick={() => handleSelect(column)}
                                disabled={column.disable}
                                isSelected={isSelected(column)}
                              >
                                <Checkbox checked={isSelected(column)} disabled={column.disable} />
                                <Typography
                                  pl="6px"
                                  pt="2px"
                                  color={isSelected(column) && !column.disable ? "#0088FF" : ""}
                                >
                                  {column.label}
                                </Typography>
                              </MenuItem>
                            );
                          })}
                      </MenuList>
                    </Box>
                  </>
                  {columnGroups &&
                    columnGroups.map((columnGroup, index) => {
                      const isMultipleGroup = columnGroups.length > 1;
                      const itemsShow = columns.filter((e) => isShow(e) && !e.hidden);
                      if (!itemsShow.length) {
                        return null;
                      }
                      const isShowLabel = columnGroup.columnKeys.filter((i) => itemsShow.find((c) => c.key === i));
                      return (
                        <Box key={"columnGroup-" + columnGroup.label + index} padding={0} pb={0}>
                          {isMultipleGroup && isShowLabel.length !== 0 && (
                            <Typography fontWeight="medium" variant="subtitle1" padding={"0px 0px 0px 16px"}>
                              {columnGroup.label}
                            </Typography>
                          )}
                          <MenuList>
                            {itemsShow.map((column, index) => {
                              let isGroup = columnGroup.columnKeys.find((i) => i === column.key);
                              if (!isGroup) return null;
                              return (
                                <MenuItem
                                  key={`items-${index}`}
                                  onClick={() => handleSelect(column)}
                                  disabled={column.disable}
                                  isSelected={isSelected(column)}
                                >
                                  <Checkbox checked={isSelected(column)} disabled={column.disable} />
                                  <Typography
                                    pl="6px"
                                    pt="2px"
                                    color={isSelected(column) && !column.disable ? "#0088FF" : ""}
                                  >
                                    {column.label}
                                  </Typography>
                                </MenuItem>
                              );
                            })}
                          </MenuList>
                        </Box>
                      );
                    })}
                </BoxMenuList>
              </Box>
            </Box>
            <Box border="1px solid #D3D5D7" borderRadius="6px" width="calc(50% - 12px)" height="100%">
              <Typography padding="16px" color="#000000" fontWeight="medium" variant="h6">
                Cột hiển thị
              </Typography>
              <BoxSelectedList>
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="droppable">
                    {(provided: any, snapshot: any) => (
                      <Item
                        overflow="auto"
                        {...provided.droppableProps}
                        height={refContentBoxHeight.current ? refContentBoxHeight.current - 97 : 0}
                        ref={provided.innerRef}
                        style={sortable ? getListStyle(snapshot.isDraggingOver) : {}}
                      >
                        {selectedColumns
                          .filter((e) => !!e)
                          .map((column, index) => (
                            <Draggable
                              key={column.key}
                              draggableId={column.key}
                              index={index}
                              isDragDisabled={!sortable}
                            >
                              {(provided: any, snapshot: any) => (
                                <ColumSelect
                                  key={"column-" + column.key + index}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={
                                    column.hidden
                                      ? { display: "none" }
                                      : sortable
                                      ? getItemStyle(snapshot.isDragging, provided.draggableProps.style)
                                      : {}
                                  }
                                >
                                  <Typography>{column.label}</Typography>
                                  {!column.disable ? (
                                    <IconButton
                                      size="small"
                                      padding="0px"
                                      mb="2px"
                                      onClick={() => handleSelect(column)}
                                      color="secondary"
                                      variant="text"
                                    >
                                      <CloseIcon size="small" color={"#A3A8AF"} />
                                    </IconButton>
                                  ) : null}
                                </ColumSelect>
                              )}
                            </Draggable>
                          ))}
                        <Box>{provided.placeholder}</Box>
                      </Item>
                    )}
                  </Droppable>
                </DragDropContext>
              </BoxSelectedList>
            </Box>
          </Container>
        </DialogContent>
        <BoxAddition>{childrenWithProps}</BoxAddition>
        <DialogActions padding="8px 24px 16px 24px">
          <Button variant="outlined" onClick={handleReset}>
            Quay về mặc định
          </Button>
          <Button onClick={() => dismissModal()} variant="outlined" ml="16px">
            Thoát
          </Button>
          <Button onClick={handleSaveColumns} variant="contained" ml="16px">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

SettingColumn.displayName = "SettingColumn";
export default memo(SettingColumn);

const Container = styled.div`
  padding: ${({ theme }) => theme.pxToRem(24)};
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.pxToRem(4)}};
  };
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.stroke};
  };
`;

const BoxMenuList = styled.div<{ refContentBoxHeight: any }>`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bcbcbc;
    border-radius: 6px;
    &:hover {
      background-color: ${({ theme }) => theme.palette.ink[40]};
    }
  }
  max-height: calc(100dvh - 412px);
  min-height: 200px;
`;

const BoxSelectedList = styled.div`
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bcbcbc;
    border-radius: 6px;
    &:hover {
      background-color: ${({ theme }) => theme.palette.ink[40]};
    }
  }
  max-height: calc(100dvh - 412px);
  min-height: 200px;
`;
const MenuList = styled.div<{ disabled?: boolean }>`
  min-width: 220px;
  &:focus {
    outline: none;
  }
  padding: 0px;
  color: ${({ disabled, theme }) => (disabled ? theme.palette.text.disabled : "")};
`;

const MenuItem = styled.div<{ disabled?: boolean; isSelected?: boolean }>`
  display: flex;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme }) => theme.pxToRem(10)};
  background: ${({ isSelected, disabled, theme }) => (isSelected && !disabled ? theme.palette.primary[5] : "")};
  margin: ${({ theme }) => theme.pxToRem(6)} ${({ theme }) => theme.pxToRem(14)};
  border-radius: ${({ theme }) => theme.pxToRem(6)};
`;

const Item = styled.div`
  border-top: 1px solid #f3f4f5;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bcbcbc;
    border-radius: 6px;
    &:hover {
      background-color: #a3a8af;
    }
  }
  min-height: 200px;
  max-height: calc(100dvh - 360px);
`;
const ColumSelect = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f5;
  }
`;
const BoxAddition = styled.div`
  max-height: 120px;
  padding: 0px 24px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bcbcbc;
    border-radius: 6px;
    &:hover {
      background-color: ${({ theme }) => theme.palette.ink[40]};
    }
  }
`;
export function removeVietnameseTones(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một ký tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  return str;
}

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "#F2F9FF" : "white",
  cursor: isDraggingOver ? "grabbing" : "default",
});

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  // change background colour if dragging
  background: isDragging ? "#E6F4FF" : "white",

  // styles we need to apply on draggables
  ...draggableStyle,
  cursor: "grab",
});
