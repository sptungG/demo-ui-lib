import React, { memo, useMemo } from "react";
import styled from "styled-components";
import TableRowBasic from "./TableRowBasic";

export interface TableHeadBasicProps extends React.PropsWithChildren<{}> {
  className?: string;
  style?: React.CSSProperties;
}

const StyledTableHead = styled.thead`
  display: table-header-group;
`;

const TableHeadBasic = ({ children, ...props }: TableHeadBasicProps) => {
  const rows = useMemo(
    () =>
      React.Children.toArray(children).flatMap((child: any) =>
        child && child.type.displayName === "TableRowBasic" ? child : []
      ) as any[],
    [children]
  );
  return (
    <StyledTableHead {...props}>
      {rows.map((row, index) => {
        return <TableRowBasic key={`trh-${index}`} variant="head" {...row.props}></TableRowBasic>;
      })}
    </StyledTableHead>
  );
};

TableHeadBasic.displayName = "TableHeadBasic";
export default memo(TableHeadBasic);
