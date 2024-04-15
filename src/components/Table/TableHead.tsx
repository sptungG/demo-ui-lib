import React, { memo, useMemo } from "react";
import TableRow from "./TableRow";
import { createContext, useContextSelector } from "use-context-selector";
import TableContext from "./TableContext";
import { TableCellProps } from "./Table.type";

export interface TableHeadProps {
  headCells: TableCellProps[];
  cellBulkActionProps?: any;
}

interface TableHeadContextType {
  rowSpan: number;
  colSpan?: number;
}

export const TableHeadContext = createContext<TableHeadContextType>({
  rowSpan: 1,
  colSpan: 1,
});

const TableHead = memo((props: TableHeadProps) => {
  const { headCells, cellBulkActionProps } = props;

  const selectedCount = useContextSelector(TableContext, (v) => v.selectedItems?.length || 0);
  const totalInPage = useContextSelector(TableContext, (v) => v.items.length);

  const splitRow = (cell: TableCellProps, rowHeads: { [key: number]: TableCellProps[] }, rowIndex: number) => {
    if (rowHeads[rowIndex]) rowHeads[rowIndex].push(cell);
    else rowHeads[rowIndex] = [cell];
    if (cell.subCells && cell.subCells.length > 0) {
      cell.subCells.forEach((subCell) => splitRow(subCell, rowHeads, rowIndex + 1));
    }
  };

  const splitHeader = useMemo(() => {
    let rowHeads: { [key: number]: TableCellProps[] } = {};
    headCells.forEach((cell) => splitRow(cell, rowHeads, 1));
    return rowHeads;
  }, [headCells]);

  const totalRowSpan = Object.keys(splitHeader).length ?? 1;

  const valueProvider = useMemo<TableHeadContextType>(() => ({ rowSpan: totalRowSpan }), [headCells]);

  return (
    <React.Fragment>
      <thead>
        <TableHeadContext.Provider value={valueProvider}>
          {Object.values(splitHeader)?.map((cells: any, index: number) => {
            return (
              <TableRow
                key={`TR-${index}`}
                variant="head"
                cellsInRow={cells}
                cellBulkActionProps={cellBulkActionProps}
                isSelected={Boolean(selectedCount && selectedCount === totalInPage)}
                isIndeterminate={Boolean(selectedCount && selectedCount < totalInPage)}
                hiddenToolbar={index !== 0}
              />
            );
          })}
        </TableHeadContext.Provider>
      </thead>
    </React.Fragment>
  );
});

TableHead.displayName = "TableHead";
export default TableHead;
