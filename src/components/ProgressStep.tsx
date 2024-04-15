import React, { memo } from "react";
import styled, { css, useTheme } from "styled-components";
import CircleCheckIcon from "../assets/svgr/CircleCheckIcon";
import OffCloseIcon from "../assets/svgr/OffCloseIcon";

export interface ProgressStepProps {
  current: string | number;
  isFailedAll?: boolean;
  isCurrentFailed?: boolean;
  steps: ProgressStepDescriptor[];
}

export interface ProgressStepDescriptor {
  id: string | number;
  title: React.ReactNode;
  subTitle: React.ReactNode;
}

const ProgressStep = ({ isFailedAll, isCurrentFailed, steps, current, ...props }: ProgressStepProps) => {
  const theme = useTheme();
  const currentStep = steps.findIndex((e) => e.id === current);
  return (
    <StyledProgressStepContainer {...props}>
      {steps?.map((step, index) => {
        return (
          <StyledProgressStepItem key={index}>
            {index !== 0 && (
              <StyledConnector
                isFailedAll={isFailedAll}
                red={currentStep === index && isCurrentFailed}
                blue={index <= currentStep}
              />
            )}
            <StyledProgressStepWrap key={step.id}>
              <StyledProgressStepIcon
                finalStep={index + 1 === steps.length}
                isFailedAll={isFailedAll}
                failed={(currentStep === index && isCurrentFailed) || (index + 1 === steps.length && isFailedAll)}
                inProgress={index === currentStep && !isFailedAll}
                finished={isFailedAll ? index <= currentStep : index < currentStep}
              >
                {(
                  isFailedAll
                    ? steps.length > index + 1 && index > currentStep
                    : isCurrentFailed
                    ? index > currentStep
                    : index >= currentStep
                )
                  ? index + 1
                  : null}
                {(isFailedAll ? index <= currentStep : index < currentStep) ? (
                  <CircleCheckIcon className={"checkIcon"} />
                ) : null}
                {(currentStep === index && isCurrentFailed && !isFailedAll) ||
                (index + 1 === steps.length && isFailedAll) ? (
                  <OffCloseIcon className={"closeIcon"} />
                ) : null}
              </StyledProgressStepIcon>
              <Title
                failed={currentStep === index && isCurrentFailed}
                inProgress={index === currentStep}
                finished={isFailedAll ? index <= currentStep : index < currentStep}
              >
                {step.title}
              </Title>
              {index <= currentStep || (index + 1 === steps.length && isFailedAll) ? (
                <SubTitle
                  finished={isFailedAll ? index <= currentStep : index < currentStep}
                  isFailedAll={isFailedAll}
                  failed={currentStep === index && isCurrentFailed}
                  className={"timeRecorder"}
                  inProgress={index === currentStep}
                >
                  {step.subTitle ? step.subTitle : null}
                </SubTitle>
              ) : null}
            </StyledProgressStepWrap>
          </StyledProgressStepItem>
        );
      })}
    </StyledProgressStepContainer>
  );
};
const StyledProgressStepContainer = styled.div`
  display: inline-flex;
  padding: ${({ theme }) => theme.pxToRem(4)} ${({ theme }) => theme.pxToRem(40)} ${({ theme }) => theme.pxToRem(68)};
`;

const StyledProgressStepWrap = styled.div`
  position: relative;

  .timeRecorder {
    color: ${({ theme }) => theme.palette.ink["80"]};
    font-size: ${(p) => p.theme.pxToRem(12)} !important;
    ${({ theme }) => theme.typography["h6"]};
  }
`;
const StyledProgressStepIcon = styled.div<
  Pick<ProgressStepProps, "isFailedAll"> & {
    failed?: boolean;
    inProgress?: boolean;
    finished?: boolean;
    finalStep?: boolean;
  }
>`
  ${({ theme }) => theme.typography["body1"]};
  color: ${(p) => p.theme.palette.stroke};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 50%;
  width: ${(p) => p.theme.pxToRem(20)};
  height: ${(p) => p.theme.pxToRem(20)};
  border: 2px solid ${(p) => p.theme.palette.black["20"]};

  ${({ finished }) => {
    if (finished) {
      return css`
        border: none;
        color: ${(p) => p.theme.palette.primary.main};
        background-color: transparent;
      `;
    }
  }}
  ${({ failed, isFailedAll, finalStep }) => {
    if ((failed && !isFailedAll) || (isFailedAll && finalStep)) {
      return css`
        border: none;
        background-color: transparent;
        color: ${(p) => p.theme.palette.error.main};
      `;
    }
  }}
  ${({ inProgress, failed }) => {
    if (inProgress && !failed) {
      return css`
        border: none;
        color: white;
        box-sizing: unset;
        background-color: ${(p) => p.theme.palette.primary.main};
        box-shadow: 0 0 0 ${({ theme }) => theme.pxToRem(4)} ${(p) => p.theme.palette.primary["10"]};
      `;
    }
  }}
  .checkIcon {
    width: ${(p) => p.theme.pxToRem(20)};
    height: ${(p) => p.theme.pxToRem(20)};
  }

  .closeIcon {
    width: ${(p) => p.theme.pxToRem(20)};
    height: ${(p) => p.theme.pxToRem(20)};
  }
`;
const StyledConnector = styled.div<Pick<ProgressStepProps, "isFailedAll"> & { red?: boolean; blue?: boolean }>`
  margin: ${(p) => p.theme.pxToRem(8)};
  border-radius: 1px;
  height: 2px;
  width: ${(p) => p.theme.pxToRem(80)};
  background-color: ${(p) => p.theme.palette.stroke};

  ${({ blue, red, isFailedAll }) => {
    if (blue && !red) {
      return css`
        background-color: ${(p) => p.theme.palette.primary.main};
      `;
    } else if (red && !isFailedAll) {
      return css`
        background-color: ${(p) => p.theme.palette.error.main};
      `;
    } else if (red && blue) {
      return css`
        background-color: ${(p) => p.theme.palette.primary.main};
      `;
    }
  }}
`;

const StyledProgressStepItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(p) => p.theme.pxToRem(20)};
`;

const Title = styled.div<
  Pick<ProgressStepProps, "isFailedAll"> & { failed?: boolean; inProgress?: boolean; finished?: boolean }
>`
  white-space: nowrap;
  position: absolute;
  top: ${(p) => p.theme.pxToRem(28)};
  left: 50%;
  ${({ theme }) => theme.typography["body1"]};
  transform: translate(-50%, 0);
`;

const SubTitle = styled.div<
  Pick<ProgressStepProps, "isFailedAll"> & { failed?: boolean; inProgress?: boolean; finished?: boolean }
>`
  white-space: nowrap;
  position: absolute;
  top: ${(p) => p.theme.pxToRem(52)};
  left: 50%;
  ${({ theme }) => theme.typography["body1"]};
  transform: translate(-50%, 0);
`;

ProgressStep.displayName = "ProgressStep";
export default memo(ProgressStep);
