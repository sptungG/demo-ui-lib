import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgRefreshIcon(props: ISvgProps) {
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
        d="M17.648 6.35A7.965 7.965 0 0 0 11.995 4 7.992 7.992 0 0 0 4 12c0 4.42 3.572 8 7.995 8 3.732 0 6.844-2.55 7.735-6h-2.082c-.82 2.33-3.041 4-5.653 4a6.007 6.007 0 0 1-6.004-6c0-3.31 2.692-6 6.004-6 1.661 0 3.142.69 4.223 1.78L12.996 11H20V4l-2.352 2.35Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgRefreshIcon;
