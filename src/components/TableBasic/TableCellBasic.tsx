import React, { memo } from "react";
import styled from "styled-components";

export interface TableCellBasicProps extends React.PropsWithChildren<{}> {
  className?: string;
  style?: React.CSSProperties;
  align?: "center" | "justify" | "left" | "right";
  variant?: "head" | "body";
  colSpan?: number;
  rowSpan?: number;
}

const StyledTableCell = styled.td<TableCellBasicProps>`
  color: inherit;
  display: table-cell;
  text-align: ${({ align }) => align || "left"};
  ${({ theme }) => theme.typography["body1"]};
  padding: 0 ${({ theme }) => theme.pxToRem(16)};
  line-height: ${({ theme }) => theme.pxToRem(18)};
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ theme }) => theme.pxToRem(52)};
  border-bottom: ${({ theme }) => `1px solid ${theme.palette.ink["30"]}`};
`;

const StyledTableHeadCell = styled.th<TableCellBasicProps>`
  color: inherit;
  display: table-cell;
  text-align: ${({ align }) => align || "left"};
  ${({ theme }) => theme.typography["subtitle1"]};
  padding: 0 ${({ theme }) => theme.pxToRem(16)};
  line-height: ${({ theme }) => theme.pxToRem(20)};
  overflow: hidden;
  text-overflow: ellipsis;
  height: ${({ theme }) => theme.pxToRem(52)};
`;

const TableCellBasic = memo(({ children, variant, ...props }: TableCellBasicProps) => {
  return variant === "head" ? (
    <StyledTableHeadCell {...props}>{children}</StyledTableHeadCell>
  ) : (
    <StyledTableCell {...props}>{children}</StyledTableCell>
  );
});

TableCellBasic.displayName = "TableCellBasic";
export default TableCellBasic;
