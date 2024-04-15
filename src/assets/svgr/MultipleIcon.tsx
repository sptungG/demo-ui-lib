import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMultipleIcon(props: ISvgProps) {
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
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M13.3 12.72A4.92 4.92 0 0 0 15 9 5 5 0 0 0 5 9a4.92 4.92 0 0 0 1.7 3.72A8 8 0 0 0 2 20a1 1 0 1 0 2 0 6 6 0 1 1 12 0 1 1 0 0 0 2 0 8 8 0 0 0-4.7-7.28ZM10 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.74.32A5 5 0 0 0 16 4a1 1 0 1 0 0 2 3 3 0 0 1 3 3 3 3 0 0 1-1.5 2.59 1 1 0 0 0-.05 1.7l.39.26.13.07a7 7 0 0 1 4 6.38 1 1 0 0 0 2 0 9 9 0 0 0-4.23-7.68Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMultipleIcon;
