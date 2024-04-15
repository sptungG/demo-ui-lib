import React, { memo } from "react";
import styled, { css } from "styled-components";
import { isEqual } from "lodash";
import { cssMargin, MarginSpacing } from "../theme";

export interface RadioGroupProps extends React.PropsWithChildren<{}>, MarginSpacing {
  direction?: "row" | "column";
  value: any;
  onChange: (value: any) => any;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ direction = "column", value, onChange, children, ...props }, ref) => {
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          checked: isEqual(child.props.value, value),
          onChange: onChange,
        });
      }
      return child;
    });
    return (
      <StyledRadioGroup {...props} ref={ref} direction={direction}>
        {childrenWithProps}
      </StyledRadioGroup>
    );
  }
);

const StyledRadioGroup = styled.div<Omit<RadioGroupProps, "value" | "onChange">>`
  display: inline-grid;
  vertical-align: middle;

  ${(props) => cssMargin(props)}

  ${({ direction }) => {
    if (direction === "row") {
      return css`
        display: inline-flex;
      `;
    }
  }}
`;

RadioGroup.displayName = "RadioGroup";
export default memo(RadioGroup);
