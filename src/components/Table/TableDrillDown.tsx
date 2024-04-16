import { memo, useMemo } from "react";
import styled from "styled-components";
import { TableTheme } from "./Table.type";
import { StyledTableRow } from "./TableRow";

type TableDrillDownProps = {
  item?: any;
  tableTheme?: TableTheme;
  colSpan?: number;
  resultOnOpen?: any;
  collapse?: () => void;
  children?: ((props?: any) => React.ReactNode) | React.ReactNode;
};

export interface TableDrillDownTemplate<T> {
  item: T;
  resultOnOpen: any;
  collapse: () => void;
}

const TableDrillDown = memo(
  ({
    children,
    item = {},
    colSpan,
    tableTheme,
    resultOnOpen = {},
    collapse,
  }: TableDrillDownProps) => {
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
