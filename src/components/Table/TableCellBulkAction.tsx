import React, { memo, useMemo } from "react";
import { TableSize, TableTheme } from "./Table.type";
import TableContext from "./TableContext";
import Typography from "../Typography";
import styled, { useTheme } from "styled-components";
import { useContextSelector } from "use-context-selector";

interface TableCellBulkActionProps extends React.PropsWithChildren<{}> {
  total?: number;
  rowSpan?: number;
  colSpan?: number;
  tableTheme?: TableTheme;
  tableSize?: TableSize;
  textSelected?: (totalSelected: number, isSelectedAll: boolean) => string;
}

export interface TableCellBulkActionTemplate {
  selectedItems: any[];
}

const TableCellBulkAction = memo(({ children, total = 0, textSelected, ...props }: TableCellBulkActionProps) => {
  const theme = useTheme();
  const nameObjectSelected = useContextSelector(TableContext, (v) => v.nameObjectSelected);
  const selectedItems = useContextSelector(TableContext, (v) => v.selectedItems);

  const childrenWithProps = useMemo(
    () => (typeof children === "function" ? children({ selectedItems } as TableCellBulkActionTemplate) : children),
    [selectedItems]
  );

  return (
    <StyledTableCellBulkAction {...props}>
      <BulkActions>
        <Typography>
          {textSelected
            ? textSelected(selectedItems?.length || 0, total > 0 && total === selectedItems?.length)
            : total > 0 && total === selectedItems?.length
            ? theme.i18n("selected_all_in_page")
            : theme.i18n("selected_count_in_page", {
                count: selectedItems?.length || 0,
                name: nameObjectSelected || "",
              })}
        </Typography>
        {childrenWithProps}
      </BulkActions>
    </StyledTableCellBulkAction>
  );
});

const StyledTableCellBulkAction = styled.th<Pick<TableCellBulkActionProps, "tableTheme" | "tableSize">>`
  color: inherit;
  ${({ theme }) => theme.typography["body1"]};
  padding: 0 ${({ theme }) => theme.pxToRem(16)};
  line-height: ${({ theme }) => theme.pxToRem(20)};
  border-bottom: ${({ theme, tableTheme }) =>
    tableTheme === "dark" ? `1px solid #243041` : `1px solid ${theme.palette.ink["30"]}`};
  border-right: ${({ tableTheme }) => (tableTheme !== "dark" ? "none" : `1px solid #243041`)};
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ theme, tableSize }) => (tableSize === "auto" ? "auto" : theme.pxToRem(tableSize === "small" ? 40 : 52))};
  text-align: left;
  vertical-align: middle;
`;

const BulkActions = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`;

TableCellBulkAction.displayName = "TableCellBulkAction";
export default TableCellBulkAction;
