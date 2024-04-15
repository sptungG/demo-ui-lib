import React, { memo, useMemo } from "react";
import styled from "styled-components";
import TableCellBasic from "./TableCellBasic";

export interface TableRowBasicProps extends React.PropsWithChildren<object> {
  className?: string;
  style?: React.CSSProperties;
  variant?: "head" | "body";
}

const StyledTableRow = styled.tr<Pick<TableRowBasicProps, "variant">>`
  color: ${({ theme }) => theme.palette.ink.main};
  background-color: ${({ variant }) => {
    return variant === "head" ? "#F4F6F8" : "#FFF";
  }};
  display: table-row;
  vertical-align: middle;
  outline: 0;
`;

const TableRowBasic = memo(({ children, variant, ...props }: TableRowBasicProps) => {
  const cells = useMemo(
    () =>
      React.Children.toArray(children).flatMap((child: any) =>
        child && child.type.displayName === "TableCellBasic" ? child : []
      ) as any[],
    [children]
  );
  return (
    <StyledTableRow variant={variant} {...props}>
      {cells.map((cell, index) => {
        return (
          <TableCellBasic key={`tc-${index}`} variant={variant} {...cell.props}></TableCellBasic>
        );
      })}
    </StyledTableRow>
  );
});

TableRowBasic.displayName = "TableRowBasic";
export default TableRowBasic;
