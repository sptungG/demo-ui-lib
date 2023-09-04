import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowChevronDuoUpIcon(props: ISvgProps) {
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
        d="m12 5.575 6.01 6.01L16.596 13 12 8.404 7.404 13 5.99 11.586 12 5.576Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m12 11 6.01 6.01-1.414 1.415L12 13.828l-4.596 4.597L5.99 17.01 12 11Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowChevronDuoUpIcon;
