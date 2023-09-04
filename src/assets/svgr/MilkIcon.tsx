import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMilkIcon(props: ISvgProps) {
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
        d="M6.636 2a1 1 0 0 0-1 1v1.467L2.22 8.74A1 1 0 0 0 2 9.364v11.818a1 1 0 0 0 1 1H21.182a1 1 0 0 0 1-1V9.364a1 1 0 0 0-.22-.625l-3.416-4.272V3a1 1 0 0 0-1-1H6.636Zm4.637 18.182h8.909V9.714l-3.417-4.271a1 1 0 0 1-.22-.625V4H7.636v.467l3.418 4.272a1 1 0 0 1 .219.625v10.818Zm-7.273 0V9.714L6.636 6.42l2.637 3.295v10.468H4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMilkIcon;
