import React, { memo, useCallback, useMemo, useState } from "react";
import TableHeadCell, { TableHeadCellToolbar } from "./TableHeadCell";
import TableCell, { TableCellToolbar } from "./TableCell";
import TableCellBulkAction from "./TableCellBulkAction";
import { TableCellProps, TableTheme } from "./Table.type";
import TableContext from "./TableContext";
import { TableHeadContext } from "./TableHead";
import { createContext, useContextSelector } from "use-context-selector";
import styled, { css } from "styled-components";
import { difference, toString, uniqBy } from "lodash";

export interface TableRowProps {
  item?: any;
  cellsInRow?: TableCellProps[];
  variant?: "head" | "body";
  isSelected?: boolean;
  isIndeterminate?: boolean;
  hiddenToolbar?: boolean;
  drillDownProps?: any;
  cellBulkActionProps?: any;
  onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>, item: any) => any;
  currentScrollLeft?: number;
}

export interface TableRowContextType {
  item: any;
}

export const TableRowContext = createContext<TableRowContextType>({
  item: {},
});

const TableRow = memo(
  ({
    item = {},
    cellsInRow,
    variant,
    isSelected,
    isIndeterminate,
    hiddenToolbar,
    drillDownProps,
    cellBulkActionProps,
    currentScrollLeft,
    onRowClick,
  }: TableRowProps) => {
    const uniqueKey = useContextSelector(TableContext, (v) => v.uniqueKey || "id");
    const tableTheme = useContextSelector(TableContext, (v) => v.tableTheme);
    const selectable = useContextSelector(TableContext, (v) => v.selectable);
    const settingColumns = useContextSelector(TableContext, (v) => v.settingColumns);
    const isHaveSettingColumns = useContextSelector(TableContext, (v) => !!v.onToggleSettings);
    const onOpenDrillDown = useContextSelector(TableContext, (v) => v.onOpenDrillDown);
    const totalRowSpan = useContextSelector(TableHeadContext, (v) => v.rowSpan);

    const [isOpenDrillDown, setIsOpenDrillDown] = useState(false);
    const [isLoadingDrillDown, setIsLoadingDrillDown] = useState(false);
    const [resultOnOpenDrillDown, setResultOnOpenDrillDown] = useState(null);

    const valueProvider = useMemo<TableRowContextType>(() => ({ item: item }), [item]);

    const columnsVisible = useMemo(
      () => settingColumns && Object.keys(settingColumns).flatMap((e) => (settingColumns[e] ? e : [])),
      [settingColumns]
    );
    const cells = useMemo(() => uniqBy(cellsInRow, "field"), [cellsInRow]);
    const cellSorted = useMemo(
      () =>
        cells
          .filter((cell) => !columnsVisible || difference(columnsVisible, [cell.field]).length < columnsVisible.length)
          .sort(function (a, b) {
            const fieldA = a.field;
            const fieldB = b.field;
            const columns = settingColumns ? Object.keys(settingColumns) : [];
            return columns.indexOf(fieldA) - columns.indexOf(fieldB);
          }),
      [cells, columnsVisible, settingColumns]
    );

    const handleOpenDrillDown = useCallback(async () => {
      if (!onOpenDrillDown) return;
      if (isOpenDrillDown) return setIsOpenDrillDown(false);
      if (resultOnOpenDrillDown) return setIsOpenDrillDown(true);
      setIsLoadingDrillDown(true);
      setResultOnOpenDrillDown(await onOpenDrillDown(item));
      setIsLoadingDrillDown(false);
      setIsOpenDrillDown(true);
    }, [onOpenDrillDown, item, isOpenDrillDown, resultOnOpenDrillDown]);

    const collapseDrillDown = useCallback(() => setIsOpenDrillDown(false), []);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLTableRowElement>) => onRowClick?.(event, item),
      [uniqueKey]
    );

    const calculatorColSpan = (cell: TableCellProps): number => {
      if (cell.subCells && cell.subCells.length > 0) {
        return cell.subCells.reduce((totalCol, col) => totalCol + calculatorColSpan(col), 0);
      } else return 1;
    };
    const calculatorRowSpan = (cell: TableCellProps): number => {
      if (!cell.isSubCell && (!cell.subCells || cell?.subCells?.length === 0)) return totalRowSpan;
      else if (!cell.isSubCell && cell.subCells) return 1;
      else if (!cell.subCells || cell?.subCells?.length === 0) return cell.depth ? totalRowSpan + 1 - cell.depth : 1;
      return 1;
    };
    const colSpanBulkAction = useMemo(
      () =>
        cellSorted?.reduce((num: number, cell: any) => {
          return num + calculatorColSpan(cell);
        }, 0) as number,
      [variant]
    );
    const isStickyColumn = useMemo(() => {
      let totalScrollLeft: number = 0;
      if (isHaveSettingColumns || selectable || !!onOpenDrillDown) totalScrollLeft += 50;
      for (let i = 0; i < cells.length; i++) {
        if (item) {
          if (item.sticky) {
            break;
          }
          totalScrollLeft += item.width ? parseInt(toString(item.width), 10) : 0;
        }
      }
      if (currentScrollLeft && currentScrollLeft >= totalScrollLeft) return true;
      return false;
    }, [currentScrollLeft, cells]);

    return (
      <React.Fragment>
        <StyledTableRow
          variant={variant}
          tableTheme={tableTheme}
          isSelected={isSelected}
          isOpenDrillDown={isOpenDrillDown}
          isOnClick={!!onRowClick}
          isStickyColumn={isStickyColumn}
        >
          <TableRowContext.Provider value={valueProvider}>
            {(isHaveSettingColumns || selectable || !!onOpenDrillDown) && !hiddenToolbar ? (
              variant === "head" ? (
                <TableHeadCellToolbar key="head" isSelected={isSelected} isIndeterminate={isIndeterminate} />
              ) : (
                <TableCellToolbar
                  key={`TCT-${item[uniqueKey]}`}
                  isSelected={isSelected}
                  isIndeterminate={isIndeterminate}
                  isHaveDrillDown={item.isHaveDrillDown}
                  isOpenDrillDown={isOpenDrillDown}
                  isLoadingDrillDown={isLoadingDrillDown}
                  onClickDrillDown={drillDownProps ? handleOpenDrillDown : undefined}
                />
              )
            ) : null}
            {variant === "head" && (isSelected || isIndeterminate) ? (
              <TableCellBulkAction {...cellBulkActionProps} colSpan={colSpanBulkAction} />
            ) : (
              cellSorted.map((cell: any, idx) => {
                return variant === "head" ? (
                  <TableHeadCell
                    {...cell}
                    key={`THC-${item[uniqueKey]}-${toString(cell?.field || idx)}-${idx}`}
                    children={cell.titleName}
                    rowSpan={calculatorRowSpan(cell)}
                    colSpan={calculatorColSpan(cell)}
                    sticky={cell.sticky}
                  />
                ) : (
                  <TableCell
                    {...cell}
                    key={`TC-${item[uniqueKey]}-${toString(cell?.field || idx)}`}
                    isOpenDrillDown={isOpenDrillDown}
                    onClick={handleClick}
                    sticky={cell.sticky && isStickyColumn}
                  />
                );
              })
            )}
          </TableRowContext.Provider>
        </StyledTableRow>
        {isOpenDrillDown && drillDownProps && (
          <TableDrillDown
            {...drillDownProps}
            item={item}
            tableTheme={tableTheme}
            colSpan={cellSorted.length + (isHaveSettingColumns || selectable || !!onOpenDrillDown ? 1 : 0)}
            collapse={collapseDrillDown}
            resultOnOpen={resultOnOpenDrillDown}
          />
        )}
      </React.Fragment>
    );
  }
);

const StyledTableRow = styled.tr<{
  variant?: string;
  tableTheme?: TableTheme;
  isOpenDrillDown?: boolean;
  isSelected?: boolean;
  isOnClick?: boolean;
  isStickyColumn?: boolean;
}>`
  color: ${({ theme }) => theme.palette.ink.main};
  background-color: ${({ theme, isOpenDrillDown, isSelected, variant }) =>
    (isSelected && variant === "body") || isOpenDrillDown
      ? theme.palette.primary["5"]
      : variant === "head"
      ? "#F4F6F8"
      : "inherit"};
  ${({ isOnClick }) => {
    if (isOnClick)
      return css`
        cursor: pointer;
      `;
  }};
  ${({ tableTheme, variant, isSelected, isOpenDrillDown, isStickyColumn }) => {
    if (variant === "body") {
      if (isOpenDrillDown) return;
      if (tableTheme === "dark") {
        return css`
          &:nth-child(even) {
            background-color: ${({ theme }) => theme.palette.ink["5"]};
          }
          &:nth-child(odd) {
            background-color: ${({ theme }) => (isStickyColumn ? "#FFFFFF" : "")};
          }
        `;
      }
      if (!isSelected) {
        return css`
          &:hover {
            background-color: ${({ theme }) => theme.palette.ink["5"]};
          }
        `;
      }
    } else if (variant === "head") {
      if (tableTheme === "dark") {
        return css`
          background-color: #2b4263;
          color: #fff;
        `;
      }
    }
  }}
`;

TableRow.displayName = "TableRow";
export default TableRow;

interface TableDrillDownProps extends React.PropsWithChildren<{}> {
  item?: any;
  tableTheme?: TableTheme;
  colSpan?: number;
  resultOnOpen?: any;
  collapse?: () => void;
}

export interface TableDrillDownTemplate<T> {
  item: T;
  resultOnOpen: any;
  collapse: () => void;
}

const TableDrillDown = memo(
  ({ children, item = {}, colSpan, tableTheme, resultOnOpen = {}, collapse }: TableDrillDownProps) => {
    const childrenWithProps = useMemo(
      () =>
        typeof children === "function"
          ? children({
              item,
              resultOnOpen,
              collapse,
            } as TableDrillDownTemplate<any>)
          : children,
      [item, resultOnOpen, collapse]
    );
    return (
      <StyledTableRow isOpenDrillDown={true}>
        <StyledCellDrillDown colSpan={colSpan} tableTheme={tableTheme}>
          {childrenWithProps}
        </StyledCellDrillDown>
      </StyledTableRow>
    );
  }
);

const StyledCellDrillDown = styled.td<TableDrillDownProps>`
  border-bottom: ${({ theme, tableTheme }) =>
    tableTheme === "dark" ? `1px solid #243041` : `1px solid ${theme.palette.ink["30"]}`};
`;

TableDrillDown.displayName = "TableDrillDown";

export { TableDrillDown };
