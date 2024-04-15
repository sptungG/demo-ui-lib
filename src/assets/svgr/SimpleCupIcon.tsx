import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSimpleCupIcon(props: ISvgProps) {
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
        d="M3 3a1 1 0 0 1 1-1h16.364a1 1 0 0 1 1 1v14.546a4.647 4.647 0 0 1-4.637 4.636h-9.09A4.647 4.647 0 0 1 3 17.546V3Zm16.364 1v1.636H5V4h14.364ZM7.545 7.636v1.728a1 1 0 0 0 2 0V7.636h9.819v9.91a2.647 2.647 0 0 1-2.637 2.636h-9.09A2.647 2.647 0 0 1 5 17.546v-9.91h2.545Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSimpleCupIcon;
