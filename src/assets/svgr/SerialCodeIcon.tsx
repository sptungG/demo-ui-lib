import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSerialCodeIcon(props: ISvgProps) {
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
        d="M2.586 2.586A2 2 0 0 1 4 2h4a1 1 0 0 1 0 2H4v4a1 1 0 0 1-2 0V4a2 2 0 0 1 .586-1.414ZM3 15a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2H4a2 2 0 0 1-2-2v-4a1 1 0 0 1 1-1ZM21 15a1 1 0 0 1 1 1v4a2 2 0 0 1-2 2h-4a1 1 0 1 1 0-2h4v-4a1 1 0 0 1 1-1ZM15 3a1 1 0 0 1 1-1h4a2 2 0 0 1 2 2v4a1 1 0 1 1-2 0V4h-4a1 1 0 0 1-1-1ZM12 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM16 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1ZM8 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSerialCodeIcon;
