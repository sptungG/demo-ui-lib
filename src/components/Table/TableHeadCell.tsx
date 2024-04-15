import React, { memo, useCallback, useMemo } from "react";
import { ArrowCaretDownIcon, ArrowCaretUpIcon, ArrowSortIcon, SettingsIcon } from "../../assets/svgr";
import { TableCellProps, TableProps, TableSize, TableTheme } from "./Table.type";
import Checkbox from "../Checkbox";
import IconButton from "../IconButton";
import TableContext from "./TableContext";
import { TableHeadContext } from "./TableHead";
import { useContextSelector } from "use-context-selector";
import styled, { css } from "styled-components";
import { toString } from "lodash";

interface StyledTableHeadCellProps extends Partial<TableCellProps> {
  tableTheme?: TableTheme;
  tableSize?: TableSize;
  sticky?: boolean;
}

const TableHeadCell = memo(
  ({ children, field, width, colSpan, rowSpan, sortable, sticky, ...props }: TableCellProps) => {
    const sortBy = useContextSelector(TableContext, (v) => v.sortBy);
    const sortDirection = useContextSelector(TableContext, (v) => v.sortDirection);
    const onSort = useContextSelector(TableContext, (v) => v.onSort);
    const tableTheme = useContextSelector(TableContext, (v) => v.tableTheme);
    const tableSize = useContextSelector(TableContext, (v) => v.tableSize);

    const SortIcon = useMemo(() => {
      if (!sortable) return;
      if (!sortDirection || field !== sortBy) {
        return <StyledArrowExpandIcon tableTheme={tableTheme} />;
      } else if (sortDirection === "desc") {
        return <StyledArrowCaretDownIcon tableTheme={tableTheme} />;
      } else {
        return <StyledArrowCaretUpIcon tableTheme={tableTheme} />;
      }
    }, [field, sortable, sortDirection, sortBy]);

    const handleSort = useCallback(() => {
      onSort?.(sortDirection === "asc" ? "desc" : "asc", toString(field));
    }, [onSort, field, sortDirection]);
    const childrenWithProps = useMemo(() => children, []);

    return (
      <StyledTH
        {...props}
        colSpan={colSpan}
        rowSpan={rowSpan}
        tableSize={tableSize}
        tableTheme={tableTheme}
        sticky={sticky}
      >
        {sortable ? (
          <StyledChildren tableTheme={tableTheme} onClick={handleSort}>
            {childrenWithProps}
            {SortIcon}
          </StyledChildren>
        ) : (
          childrenWithProps
        )}
      </StyledTH>
    );
  }
);

const StyledChildren = styled.div<Pick<TableProps, "tableTheme">>`
  display: inline-flex;
  cursor: pointer;
  align-items: center;

  ${({ tableTheme }) => {
    if (tableTheme !== "dark")
      return css`
        &:hover {
          color: ${({ theme }) => theme.palette.primary.main};

          & > svg {
            background: ${({ theme }) => theme.palette.ink["30"]};
            border-radius: 50%;
          }
        }
      `;
  }}
`;

interface StyledSVGIconProps {
  tableTheme: TableTheme;
}

const StyledArrowExpandIcon = styled(({ tableTheme, ...props }) => <ArrowSortIcon {...props} />)<StyledSVGIconProps>`
  color: ${({ theme, tableTheme }) => (tableTheme === "dark" ? "#fff" : theme.palette.ink["40"])};
  height: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(24)};
`;

const StyledArrowCaretDownIcon = styled(({ tableTheme, ...props }) => (
  <ArrowCaretDownIcon {...props} />
))<StyledSVGIconProps>`
  color: ${({ theme, tableTheme }) => (tableTheme === "dark" ? "#fff" : theme.palette.ink["40"])};
  height: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(24)};
`;

const StyledArrowCaretUpIcon = styled(({ tableTheme, ...props }) => (
  <ArrowCaretUpIcon {...props} />
))<StyledSVGIconProps>`
  color: ${({ theme, tableTheme }) => (tableTheme === "dark" ? "#fff" : theme.palette.ink["40"])};
  height: ${({ theme }) => theme.pxToRem(24)};
  width: ${({ theme }) => theme.pxToRem(24)};
`;

const CellActions = styled.div<{ isHave2Icons: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isHave2Icons }) => (isHave2Icons ? "80px" : "50px")};
`;

const EmptyElement = styled.div<{}>`
  width: ${({ theme }) => theme.pxToRem(30)};
  height: ${({ theme }) => theme.pxToRem(30)};
  pointer-events: none;
  flex: none;
`;

export const StyledTH = styled.th<StyledTableHeadCellProps & { isToolCell?: boolean }>`
  color: inherit;
  position: ${({ sticky }) => sticky && "sticky"};
  position: ${({ sticky }) => sticky && "-webkit-sticky"};
  z-index: ${({ sticky }) => sticky && "8"};
  background-color: ${({ sticky }) => sticky && "inherit"};
  left: 0px;
  ${({ theme }) => theme.typography["subtitle1"]};
  padding: ${({ theme, isToolCell }) => (isToolCell ? 0 : `0 ${theme.pxToRem(16)}`)};
  line-height: ${({ theme }) => theme.pxToRem(20)};
  text-align: ${({ align }) => align || "left"};
  border-bottom: ${({ theme, tableTheme }) =>
    tableTheme === "dark" ? `1px solid #243041` : `1px solid ${theme.palette.ink["30"]}`};
  border-right: ${({ tableTheme }) => (tableTheme !== "dark" ? "none" : `1px solid #243041`)};
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ theme, tableSize }) => (tableSize === "auto" ? "auto" : theme.pxToRem(tableSize === "small" ? 40 : 52))};
  background: ${({ background }) => background};
`;

TableHeadCell.displayName = "TableHeadCell";
export default TableHeadCell;

const SettingButton = styled(IconButton)<{ tableTheme?: TableTheme; open?: boolean }>`
  padding: 0;
  background: transparent;

  &:hover {
    background: ${({ theme, tableTheme }) => (tableTheme === "dark" ? "#243751" : theme.palette.ink["30"])};
  }

  svg {
    color: ${({ theme, tableTheme, open }) =>
      tableTheme === "dark" ? "#fff" : open ? theme.palette.primary.main : theme.palette.ink["40"]};
    height: ${({ theme }) => theme.pxToRem(24)};

    &:hover {
      background: transparent;
    }
  }
`;

export interface TableHeadCellToolbarProps extends React.PropsWithChildren<{}> {
  isSelected?: boolean;
  isIndeterminate?: boolean;
}

const TableHeadCellToolbar = memo(({ children, isSelected, isIndeterminate, ...props }: TableHeadCellToolbarProps) => {
  const tableSize = useContextSelector(TableContext, (v) => v.tableSize);
  const tableTheme = useContextSelector(TableContext, (v) => v.tableTheme);
  const selectable = useContextSelector(TableContext, (v) => v.selectable);
  const onSelectionChange = useContextSelector(TableContext, (v) => v.onSelectionChange);
  const handleSelectionChange = useCallback(() => onSelectionChange?.("all"), [onSelectionChange]);
  const isHaveDrillDown = useContextSelector(TableContext, (v) => !!v.onOpenDrillDown);
  const onToggleSettings = useContextSelector(TableContext, (v) => v.onToggleSettings);
  const rowSpan = useContextSelector(TableHeadContext, (v) => v.rowSpan);

  return (
    <StyledTH {...props} isToolCell rowSpan={rowSpan} tableSize={tableSize} tableTheme={tableTheme}>
      <CellActions isHave2Icons={!!onToggleSettings && !!selectable}>
        {onToggleSettings ? (
          <SettingButton tableTheme={tableTheme} variant="text" size="medium" onClick={onToggleSettings}>
            <SettingsIcon />
          </SettingButton>
        ) : isHaveDrillDown ? (
          <EmptyElement />
        ) : null}
        {!!selectable && (
          <Checkbox
            size="large"
            theme={tableTheme}
            checked={isSelected}
            indeterminate={isIndeterminate}
            onChange={handleSelectionChange}
          />
        )}
      </CellActions>
    </StyledTH>
  );
});

TableHeadCellToolbar.displayName = "TableHeadCellToolbar";

export { TableHeadCellToolbar };
