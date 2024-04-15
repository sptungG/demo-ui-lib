import React, {
  Fragment,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableContext, { TableContextType } from "./TableContext";
import { TableCellProps, TableProps, TableRef, TableTheme } from "./Table.type";
import Pagination from "../Pagination";
import { MacScrollbar as Scrollbars } from "mac-scrollbar";
import styled, { CSSObject } from "styled-components";
import { isArray } from "lodash";

const Table = React.forwardRef<TableRef, TableProps>((props, ref) => {
  const {
    children,
    items = [],
    total,
    page = 1,
    limit = 20,
    shortPagination,
    onPageChange,
    uniqueKey = "id",
    nameObjectSelected,
    rowCount,
    selectable,
    selectedItems = [],
    onSelectionChange,
    settingColumns,
    onToggleSettings,
    onOpenDrillDown,
    onRowClick,
    fixTopTableRow,
    fixTopTableRowV2,
    fixScrollXBar = true,
    sticky,
    stickyPosition,
    scrollXStyle,
    maxHeightScroll,
  } = props;

  const refUniqueKey = useRef(uniqueKey);
  const refSelectedItems = useRef(selectedItems);
  const refItems = useRef(items);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const scrollbarRef = React.useRef<HTMLDivElement>(null);
  const refOnSelectionChange = useRef(onSelectionChange);
  const refOnRowClick = useRef(onRowClick);

  const [currentScrollLeft, setCurrentScrollLeft] = useState<number>();
  useEffect(() => {
    refItems.current = items;
    refUniqueKey.current = uniqueKey;
    refSelectedItems.current = selectedItems;
    refOnSelectionChange.current = onSelectionChange;
    refOnRowClick.current = onRowClick;
  });

  useEffect(() => {
    if (scrollbarRef.current && headerRef.current) {
      const values = scrollbarRef.current;
      headerRef.current.scrollLeft = values.scrollLeft;
    }
  }, [selectedItems]);

  const handleChangPage = useCallback(
    (page: number, limit: number) => onPageChange?.(page, limit),
    [onPageChange]
  );

  const handleRowClick = useCallback((e: any, data: any) => {
    if (refOnRowClick.current) {
      refOnRowClick.current(e, data);
    }
  }, []);

  const handleSelectionChange = useCallback(
    (item: any | "all") => {
      const onSelectionChange = refOnSelectionChange.current;
      if (!onSelectionChange || !item) return;
      const items = refItems.current;
      const uniqueKey = refUniqueKey.current;
      const selectedItems = refSelectedItems.current;
      if (item === "all") {
        if (selectedItems.length === items.length) onSelectionChange([]);
        else onSelectionChange(items);
        return;
      }
      const selected = [...selectedItems];
      let newSelected: any[] = [];
      const selectedIndex = selected.findIndex((s) => s[uniqueKey] === item?.[uniqueKey]);
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, item);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
      onSelectionChange(newSelected);
    },
    [refSelectedItems, refItems]
  );

  const handleScrollLeft = (values: any) => {
    headerRef.current!.scrollLeft = values.scrollLeft;
    setCurrentScrollLeft(values.scrollLeft);
  };

  const valueContext = useMemo<TableContextType>(
    () => ({
      ...props,
      page: page,
      limit: limit,
      uniqueKey: uniqueKey,
      nameObjectSelected: nameObjectSelected,
      rowCount: rowCount,
      settingColumns: settingColumns,
      selectedItems: selectedItems,
      onSelectionChange: handleSelectionChange,
      onOpenDrillDown: onOpenDrillDown,
    }),
    [props, handleSelectionChange]
  );

  const drillDownProps = useMemo(
    () =>
      (
        React.Children.toArray(children).find(
          (child: any) => !!(child && child.type.displayName === "TableDrillDown")
        ) as any
      )?.props,
    []
  );

  const cellBulkActionProps = useMemo(
    () =>
      (
        React.Children.toArray(children).find(
          (child: any) => !!(child && child.type.displayName === "TableCellBulkAction")
        ) as any
      )?.props,
    [children]
  );

  const renderHeadCell = useCallback(
    (
      col: ReactElement,
      depth: number,
      compareProps: { isSubCell: boolean; isShow: boolean }
    ): TableCellProps => {
      const cell = {
        field: col.props.field,
        titleName: col.props.title,
        children: col.props.children,
        align: col.props.align,
        sortable: col.props.sortable,
        width: col.props.width,
        maxWidth: col.props.maxWidth,
        minWidth: col.props.minWidth,
        component: col.props.component,
        sticky: col.props.sticky,
        depth: depth,
      } as TableCellProps;

      if (settingColumns) {
        cell.isShow = compareProps.isSubCell ? compareProps.isShow : settingColumns[cell.field];
      } else {
        cell.isShow = true;
      }

      if (cell.children) {
        cell.subCells = [];
        if (isArray(cell.children)) {
          (cell.children as any).forEach((cellTmp: any) => {
            if (cellTmp?.type?.displayName && cellTmp.type.displayName === "TableColumn") {
              const subCell = renderHeadCell(cellTmp as ReactElement, depth + 1, {
                isSubCell: true,
                isShow: !!cell.isShow,
              });
              cell.subCells?.push(subCell);
            }
          });
        } else {
          if (
            (cell.children as any)?.type?.displayName &&
            (cell.children as any).type.displayName === "TableColumn"
          ) {
            cell.subCells?.push(
              renderHeadCell(cell.children as ReactElement, depth + 1, {
                isSubCell: true,
                isShow: cell.isShow,
              })
            );
          }
        }
        if (settingColumns && cell.subCells && cell.subCells.length > 0) {
          cell.subCells.sort((a, b) => {
            return (
              Object.keys(settingColumns).indexOf(a.field) -
              Object.keys(settingColumns).indexOf(b.field)
            );
          });
        }
      }
      cell.isSubCell = compareProps.isSubCell;
      return cell;
    },
    [settingColumns]
  );

  const headCells = useMemo(() => {
    const columnElements: ReactElement[] = [];

    React.Children.toArray(children).forEach((child: any) => {
      if (child && child.type.displayName === "TableColumn") {
        columnElements.push(child);
      }
    });
    const cells: TableCellProps[] = [];
    columnElements.forEach((col) => {
      const cell = renderHeadCell(col, 1, { isSubCell: false, isShow: true });
      cells.push(cell);
    });
    if (settingColumns) {
      cells.sort((a, b) => {
        return (
          Object.keys(settingColumns).indexOf(a.field) -
          Object.keys(settingColumns).indexOf(b.field)
        );
      });
    }
    return cells;
  }, [settingColumns]);

  const splitRow = (cell: TableCellProps, rowHeads: TableCellProps[], rowIndex: number) => {
    if (cell.subCells && cell.subCells.length > 0) {
      cell.subCells.forEach((subCell) => splitRow(subCell, rowHeads, rowIndex + 1));
    } else rowHeads.push(cell);
  };

  const headWithoutSubCells = useMemo(() => {
    const rowHeads: TableCellProps[] = [];
    headCells.forEach((cell: TableCellProps) => splitRow(cell, rowHeads, 1));
    return rowHeads;
  }, [headCells]);

  const cols = useMemo(() => {
    return headWithoutSubCells
      .filter((cell) => cell.isShow)
      .map((cell) => {
        return {
          width: cell.width,
          maxWidth: cell.maxWidth,
          minWidth: cell.minWidth,
        } as ColProps;
      });
  }, [headWithoutSubCells]);

  const _ColGroup = useMemo(
    () => (
      <ColGroup
        cols={cols}
        isHaveSettingColumns={!!onToggleSettings}
        selectable={!!selectable}
        isHaveDrillDown={!!onOpenDrillDown}
      />
    ),
    [headCells, !!onToggleSettings, !!onOpenDrillDown, selectable]
  );

  return (
    <Fragment>
      <TableContext.Provider value={valueContext}>
        <TableContainer
          ref={headerRef}
          sticky={sticky}
          stickyPosition={stickyPosition}
          boxShadow={!!fixTopTableRowV2}
        >
          <StyledTable>
            {_ColGroup}
            <TableHead headCells={headCells} cellBulkActionProps={cellBulkActionProps} />
            {fixTopTableRow?.() || fixTopTableRowV2?.()}
          </StyledTable>
        </TableContainer>
        <TableContainer tableTheme={props.tableTheme}>
          <Scrollbars ref={scrollbarRef}>
            <StyledTable>
              {_ColGroup}
              <TableBody
                cells={headWithoutSubCells}
                drillDownProps={drillDownProps}
                onRowClick={onRowClick ? handleRowClick : undefined}
                currentScrollLeft={currentScrollLeft}
              />
            </StyledTable>
          </Scrollbars>
          {!!onPageChange && (
            <Pagination
              total={total}
              shortPagination={shortPagination}
              nameObjectSelected={nameObjectSelected}
              currentPage={page}
              onChange={handleChangPage}
              limit={limit}
            />
          )}
        </TableContainer>
      </TableContext.Provider>
    </Fragment>
  );
});

// const TrackHorizontal = styled.div`
//   bottom: 2px;
//   border-radius: ${({ theme }) => theme.pxToRem(6)};
// `;

// const ThumbHorizontal = styled.div`
//   background-color: rgba(0, 0, 0, 0.2);
//   border-radius: inherit;
// `;

const TableContainer = styled.div<{
  stickyPosition?: CSSObject["top"];
  sticky?: boolean;
  boxShadow?: boolean;
  tableTheme?: TableTheme;
}>`
  position: ${({ sticky }) => (sticky ? "sticky" : undefined)};
  top: ${({ sticky, stickyPosition }) => (sticky && stickyPosition ? stickyPosition : undefined)};
  box-shadow: ${({ boxShadow }) => (boxShadow ? "rgba(168, 168, 168, 0.25) 0px 4px 8px" : "none")};
  z-index: 9;
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ tableTheme }) => (tableTheme === "grey" ? "#F4F6F8" : "#FFF")};
`;

const StyledTable = styled.table`
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;

Table.displayName = "Table";
export default memo(Table);

interface ColProps {
  width?: CSSObject["width"];
  maxWidth?: CSSObject["maxWidth"];
  minWidth?: CSSObject["minWidth"];
}

interface ColGroupProps {
  cols: ColProps[];
  selectable: boolean;
  isHaveSettingColumns: boolean;
  isHaveDrillDown: boolean;
}

const ColGroup = (props: ColGroupProps) => {
  const { cols, selectable, isHaveSettingColumns, isHaveDrillDown } = props;
  return (
    <colgroup>
      {selectable ? (
        <col style={{ width: isHaveSettingColumns ? 80 : 50 }} />
      ) : (
        (isHaveSettingColumns || isHaveDrillDown) && <col style={{ width: 50 }} />
      )}
      {cols.map((col, index) => (
        <col
          key={index}
          style={{ width: col.width, maxWidth: col.maxWidth, minWidth: col.minWidth }}
        />
      ))}
    </colgroup>
  );
};
