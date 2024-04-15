import React, { memo } from "react";
import styled from "styled-components";

export interface TableBasicProps extends React.PropsWithChildren<{}> {
  className?: string;
  style?: React.CSSProperties;
}

const TableContainer = styled.div`
  display: flex;
  z-index: 10;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;
  box-sizing: border-box;
  & * {
    box-sizing: inherit;
  }
`;

const TableBasic = React.forwardRef<HTMLDivElement, TableBasicProps>(({ children, ...props }, ref) => (
  <TableContainer {...props} ref={ref}>
    <StyledTable>{children}</StyledTable>
  </TableContainer>
));

TableBasic.displayName = "TableBasic";
export default memo(TableBasic);
