import React, { memo } from "react";
import styled from "styled-components";

const Toolbar = ({ children }: React.PropsWithChildren<{}>) => {
  return <StyledToolbar>{children}</StyledToolbar>;
};

const StyledToolbar = styled.div`
  border-bottom: 1px solid #f3f4f5;
  justify-content: space-between;
  align-items: center;
`;
export default memo(Toolbar);
