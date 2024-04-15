import React, { memo, useCallback } from "react";
import TableRow from "./TableRow";
import { TableCellProps } from "./Table.type";
import TableContext from "./TableContext";
import { useContextSelector } from "use-context-selector";

export interface TableBodyProps {
  cells: TableCellProps[];
  drillDownProps?: any;
  onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>, id: any) => any;
  currentScrollLeft?: number;
}

const TableBody = memo((props: TableBodyProps) => {
  const { cells, drillDownProps, onRowClick, currentScrollLeft } = props;

  const items = useContextSelector(TableContext, (v) => v.items || []);
  const selectedItems = useContextSelector(TableContext, (v) => v.selectedItems || []);
  const uniqueKey = useContextSelector(TableContext, (v) => v.uniqueKey || "id");

  const checkIsSelected = useCallback(
    (item: any) => selectedItems.some((s) => s[uniqueKey] === item[uniqueKey]),
    [selectedItems, uniqueKey]
  );

  return (
    <tbody>
      {items.map((item, index) => (
        <TableRow
          {...props}
          key={item[uniqueKey] ? `TR-${item[uniqueKey]}` : index}
          item={item}
          cellsInRow={cells}
          variant="body"
          isSelected={checkIsSelected(item)}
          drillDownProps={drillDownProps}
          onRowClick={onRowClick}
          currentScrollLeft={currentScrollLeft}
        />
      ))}
    </tbody>
  );
});

TableBody.displayName = "TableBody";
export default TableBody;
