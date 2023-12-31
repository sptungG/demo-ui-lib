import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgDoughnutChartIcon(props: ISvgProps) {
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
        d="M17.96 10.949H22C21.529 6.232 17.768 2.471 13.051 2v4.04a6.004 6.004 0 0 1 4.909 4.909Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M12.051 17.949c-3.309 0-6-2.691-6-6 0-2.967 2.167-5.432 5-5.909V2c-5.046.504-9 4.773-9 9.949 0 5.514 4.486 10 10 10 5.176 0 9.445-3.954 9.949-9h-4.04c-.478 2.833-2.942 5-5.909 5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgDoughnutChartIcon;
