import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCartCancelIcon(props: ISvgProps) {
  const sizeCheck = (value: any) => {
    if (props.size === "small") {
      return 20;
    } else if (props.size === "regular") {
      return 24;
    } else if (props.size === "large") {
      return 36;
    } else {
      return value;
    }
  };

  const colorCheck = (value: any) => {
    if (value === "primary") {
      return "#0088FF";
    } else if (value === "success") {
      return "#0FD186";
    } else if (value === "error") {
      return "#FF4D4D";
    } else if (value === "warning") {
      return "#FFAE06";
    } else {
      return value;
    }
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M20.458 10.913a.6.6 0 0 0-.612.587v2.045c0 .681-.579 1.236-1.29 1.236H9.024c-.71 0-1.29-.555-1.29-1.236V4.547c0-.653-.427-1.247-1.065-1.478l-2.84-1.03a.62.62 0 0 0-.79.34.58.58 0 0 0 .357.757l2.84 1.03a.41.41 0 0 1 .274.381v12.396c0 1.248 1.04 2.268 2.333 2.308a1.88 1.88 0 0 0-.174.788c0 1.081.918 1.961 2.046 1.961 1.128 0 2.046-.88 2.046-1.96 0-.28-.062-.546-.173-.787h3.656a1.88 1.88 0 0 0-.173.786c0 1.081.918 1.961 2.046 1.961 1.128 0 2.046-.88 2.046-1.96 0-1.082-.918-1.961-2.046-1.961H8.92c-.653 0-1.185-.51-1.185-1.137v-1.33c.377.217.818.342 1.29.342h9.531c1.387 0 2.515-1.08 2.515-2.41V11.5a.6.6 0 0 0-.613-.587Zm-2.34 8.34c.452 0 .82.353.82.786 0 .434-.368.787-.82.787-.454 0-.822-.353-.822-.787 0-.433.368-.786.821-.786Zm-7.403 0c.453 0 .821.353.821.786 0 .434-.368.787-.821.787-.453 0-.821-.353-.821-.787 0-.433.368-.786.821-.786Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="m14.755 8.334 1.857-1.78a.57.57 0 0 0 0-.83.631.631 0 0 0-.866 0l-1.857 1.78-1.858-1.78a.631.631 0 0 0-.866 0 .57.57 0 0 0 0 .83l1.858 1.78-1.858 1.78a.57.57 0 0 0 0 .83c.12.115.277.172.433.172a.624.624 0 0 0 .433-.172l1.858-1.78 1.857 1.78c.12.115.276.172.433.172a.624.624 0 0 0 .433-.172.57.57 0 0 0 0-.83l-1.857-1.78Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgCartCancelIcon;
