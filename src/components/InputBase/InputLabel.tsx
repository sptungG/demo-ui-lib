import React, { memo, useEffect } from "react";
import styled from "styled-components";
import { Tooltip } from "../..";
import InfoCircleOutlineIcon from "../../assets/svgr/InfoCircleOutlineIcon";
import useTooltip from "../../hooks/useTooltip";

interface InputLabelProps extends React.PropsWithChildren<{}> {
  htmlFor?: string;
  asterisk?: boolean;
  "data-tip"?: string | number | JSX.Element;
}

const TooltipInfo = styled(InfoCircleOutlineIcon)<InputLabelProps>`
  height: ${({ theme }) => theme.pxToRem(20)};
  width: ${({ theme }) => theme.pxToRem(20)};
  padding: ${({ theme }) => theme.pxToRem(2)};
  color: ${({ theme }) => theme.palette.primary.main};
  box-sizing: border-box;
  cursor: pointer;
  margin-left: 4px;
`;

const InputLabel = memo((props: InputLabelProps) => {
  const { htmlFor, children, asterisk } = props;
  const rebuildTooltip = useTooltip();
  useEffect(() => {
    if (props["data-tip"]) {
      rebuildTooltip();
    }
  }, []);

  return (
    <Label htmlFor={htmlFor}>
      {children}
      {!!asterisk && <Asterisk>&nbsp;*</Asterisk>}
      {!!props["data-tip"] && (
        <Tooltip element={props["data-tip"]} data-tip-placement="top">
          <TooltipInfo />
        </Tooltip>
      )}
    </Label>
  );
});

export default InputLabel;

const Label = styled.label`
  display: inline-flex;
  ${({ theme }) => theme.typography.body1};
  box-sizing: border-box;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.pxToRem(4)} 0;
  color: ${({ theme }) => theme.palette.ink["80"]};
`;

const Asterisk = styled.span`
  color: ${({ theme }) => theme.palette.error.main};
`;
