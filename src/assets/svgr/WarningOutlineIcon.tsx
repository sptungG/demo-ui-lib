import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWarningOutlineIcon(props: ISvgProps) {
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
      <path d="M11 10h2v5h-2v-5ZM12 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.734 21.002a1 1 0 0 1-.865-1.501l9.265-16.004a1 1 0 0 1 1.731 0L22.131 19.5a1 1 0 0 1-.866 1.501H2.735Zm16.797-2L12 5.994 4.469 19.002H19.53Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M11 16h2v2h-2v-2Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgWarningOutlineIcon;
