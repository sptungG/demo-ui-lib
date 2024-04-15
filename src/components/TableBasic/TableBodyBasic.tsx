import React, { memo, useMemo } from "react";
import styled from "styled-components";
import TableRowBasic from "./TableRowBasic";

export interface TableBodyBasicProps extends React.PropsWithChildren<{}> {
  className?: string;
  style?: React.CSSProperties;
}

const StyledTableBody = styled.tbody`
  display: table-row-group;
`;

const TableBodyBasic = ({ children, ...props }: TableBodyBasicProps) => {
  const rows = useMemo(
    () =>
      React.Children.toArray(children).flatMap((child: any) =>
        child && child.type.displayName === "TableRowBasic" ? child : []
      ) as any[],
    [children]
  );
  return (
    <StyledTableBody {...props}>
      {rows.length > 0 &&
        rows.map((row, index) => {
          return <TableRowBasic key={`trb-${index}`} variant="body" {...row.props}></TableRowBasic>;
        })}
      {rows.length <= 0 && children}
    </StyledTableBody>
  );
};

TableBodyBasic.displayName = "TableBodyBasic";
export default memo(TableBodyBasic);
