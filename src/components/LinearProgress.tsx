import React, { memo } from "react";
import styled from "styled-components";

export interface LinearProgressProps {
  value: number;
}

const LinearProgress = ({ value, ...props }: LinearProgressProps) => {
  return (
    <StyledLinearProgressContainer {...props}>
      <StyledLinearProgressBackgroundLine>
        <StyledLinearProgressLoadingLine
          style={{
            transform: `translateX(${value - 100}%)`,
          }}
        />
      </StyledLinearProgressBackgroundLine>
    </StyledLinearProgressContainer>
  );
};

const StyledLinearProgressContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;

const StyledLinearProgressBackgroundLine = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${(p) => p.theme.pxToRem(4)};
  background-color: ${(p) => p.theme.palette.primary["20"]};
`;

const StyledLinearProgressLoadingLine = styled.span`
  display: block;
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${(p) => p.theme.palette.primary.main};
  transform-origin: left center;
  transition: transform 0.4s linear 0s;
`;

LinearProgress.displayName = "LinearProgress";
export default memo(LinearProgress);
