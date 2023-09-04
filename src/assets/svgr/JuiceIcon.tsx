import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgJuiceIcon(props: ISvgProps) {
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
        d="M14.606 2.553A1 1 0 0 1 15.5 2h3.333a1 1 0 1 1 0 2h-2.715l-.667 1.333h3.799a1 1 0 0 1 .765.356c1.488 1.767 2.318 3.996 2.318 6.478 0 4.06-2.397 7.668-5.925 9.246A1 1 0 0 1 16 21.5H8.333a1 1 0 0 1-.408-.087C4.398 19.835 2 16.227 2 12.167c0-2.482.83-4.711 2.318-6.478a1 1 0 0 1 .765-.356h8.132l1.39-2.78Zm-.794 4.78H5.566C4.563 8.673 4 10.316 4 12.167c0 3.2 1.85 6.034 4.554 7.333h7.226c2.704-1.299 4.553-4.134 4.553-7.333 0-1.851-.563-3.494-1.565-4.834h-4.956Zm-4.979 3.334a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333Zm-2.666.666a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.333 0Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgJuiceIcon;
