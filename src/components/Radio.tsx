import React, { memo, useMemo } from "react";
import styled, { css } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { cssSpacing, Spacing } from "../theme";

export interface RadioProps extends React.PropsWithChildren<{}>, Spacing {
  value: any;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  name?: string;
  id?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ value, checked, disabled, id, label, ...props }, ref) => {
    const uid = useMemo(() => (id ? id : `Sapo-Radio-${uuidv4()}`), [id]);
    return (
      <StyledRadioContainer
        margin={props.margin}
        ml={props.ml}
        mr={props.mr}
        mb={props.mb}
        mt={props.mt}
        mx={props.mx}
        my={props.my}
        padding={props.padding}
        pl={props.pl}
        pr={props.pr}
        pb={props.pb}
        pt={props.pt}
        px={props.px}
        py={props.py}
      >
        <StyledRadioDiv>
          <StyledRadioInput
            id={uid}
            ref={ref}
            checked={checked}
            disabled={disabled}
            onChange={() => (props as any)?.onChange?.(value)}
          />
          <StyledRadio disabled={disabled} />
        </StyledRadioDiv>
        {!!label && (
          <StyledRadioLabel disabled={disabled} htmlFor={uid}>
            {label}
          </StyledRadioLabel>
        )}
      </StyledRadioContainer>
    );
  }
);

const StyledRadioContainer = styled.div<Partial<RadioProps>>`
  display: inline-flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  background-color: transparent;
  height: ${(p) => p.theme.pxToRem(24)};

  ${({ theme }) => theme.typography["body1"]};
  ${(props) => cssSpacing(props)}
}
`;

const StyledRadioDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(p) => p.theme.pxToRem(24)};
  width: ${(p) => p.theme.pxToRem(24)};
  overflow: hidden;
`;
const StyledRadioLabel = styled.label<Partial<RadioProps>>`
  text-align: center;
  margin-left: ${(p) => p.theme.pxToRem(8)};
  color: ${(p) => p.theme.palette.ink.main};
  cursor: pointer;

  ${({ disabled }) => {
    if (!disabled) {
      return css`
        &:hover {
          color: ${(p) => p.theme.palette.primary.main};
        }
      `;
    } else {
      return css`
        color: ${(p) => p.theme.palette.ink["60"]};
        cursor: default;
      `;
    }
  }}
`;

const StyledRadioInput = styled.input.attrs((props) => ({ type: "radio", disabled: props.disabled }))`
  position: absolute;
  width: ${(p) => p.theme.pxToRem(24)};
  height: ${(p) => p.theme.pxToRem(24)};
  margin: 0;
  opacity: 0;
  z-index: 1;
  ${({ disabled }) => {
    if (!disabled) {
      return css`
        cursor: pointer;
      `;
    } else {
      return css`
        cursor: default;
      `;
    }
  }}
`;

const StyledRadio = styled.div<Pick<RadioProps, "disabled">>`
  width: ${(p) => p.theme.pxToRem(16)};
  height: ${(p) => p.theme.pxToRem(16)};
  background: transparent;
  align-items: center;
  position: relative;
  border: 2px solid ${(p) => p.theme.palette.ink["40"]};
  box-sizing: border-box;
  border-radius: 50%;

  ${StyledRadioInput}:checked + & {
    border: none;
    width: ${(p) => p.theme.pxToRem(24)};
    height: ${(p) => p.theme.pxToRem(24)};
    box-sizing: border-box;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.4286 12C15.4286 13.8935 13.8935 15.4286 12 15.4286C10.1065 15.4286 8.57143 13.8935 8.57143 12C8.57143 10.1065 10.1065 8.57143 12 8.57143C13.8935 8.57143 15.4286 10.1065 15.4286 12Z' fill='%230088FF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 17.7143C15.1559 17.7143 17.7143 15.1559 17.7143 12C17.7143 8.84409 15.1559 6.28571 12 6.28571C8.84409 6.28571 6.28571 8.84409 6.28571 12C6.28571 15.1559 8.84409 17.7143 12 17.7143Z' fill='%230088FF'/%3E%3C/svg%3E");
    background-size: 100%;
    background-position: center;
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        border-color: ${(p) => p.theme.palette.black["20"]};
      `;
    }
  }}
  ${StyledRadioInput}:checked:disabled + & {
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.4286 12C15.4286 13.8935 13.8935 15.4286 12 15.4286C10.1065 15.4286 8.57143 13.8935 8.57143 12C8.57143 10.1065 10.1065 8.57143 12 8.57143C13.8935 8.57143 15.4286 10.1065 15.4286 12Z' fill='%23DEDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 17.7143C15.1559 17.7143 17.7143 15.1559 17.7143 12C17.7143 8.84409 15.1559 6.28571 12 6.28571C8.84409 6.28571 6.28571 8.84409 6.28571 12C6.28571 15.1559 8.84409 17.7143 12 17.7143Z' fill='%23DEDFE1'/%3E%3C/svg%3E");
    background-size: 100%;
    width: ${(p) => p.theme.pxToRem(24)};
    height: ${(p) => p.theme.pxToRem(24)};
    background-position: center;
  }
}
`;

Radio.displayName = "Radio";
export default memo(Radio);
