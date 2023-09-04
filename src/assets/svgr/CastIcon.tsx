import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCastIcon(props: ISvgProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3h18c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-7v-2h7V5H3v3H1V5c0-1.1.9-2 2-2ZM1 21v-3c1.66 0 3 1.34 3 3H1Zm0-7v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7Zm0-2v-2c6.07 0 11 4.92 11 11h-2a9 9 0 0 0-9-9Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCastIcon;
