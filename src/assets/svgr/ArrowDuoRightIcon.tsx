import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowDuoRightIcon(props: ISvgProps) {
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
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="m18.425 12-6.01 6.01L11 16.596 15.596 12 11 7.404l1.414-1.414 6.01 6.01Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m13 12-6.01 6.01-1.415-1.414L10.172 12 5.575 7.404 6.99 5.99 13 12Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowDuoRightIcon;
