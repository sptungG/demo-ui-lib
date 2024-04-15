import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGridRoundIcon(props: ISvgProps) {
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
        d="M4 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM6 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM18 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM18 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgGridRoundIcon;
