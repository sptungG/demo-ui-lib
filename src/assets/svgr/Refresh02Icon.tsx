import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgRefresh02Icon(props: ISvgProps) {
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
        d="M12.005 4c2.21 0 4.208.894 5.653 2.34L20 4v7h-7.004l3.222-3.22c-1.08-1.09-2.56-1.779-4.219-1.78a5.994 5.994 0 0 0-5.648 4h-.017a5.948 5.948 0 0 0-.26 1H4.063c.49-3.948 3.85-7 7.933-7h.01ZM4 13v7l2.341-2.34A7.966 7.966 0 0 0 11.995 20h.01a7.991 7.991 0 0 0 7.933-7h-2.012a5.947 5.947 0 0 1-.26 1h-.018a5.994 5.994 0 0 1-5.647 4c-1.66-.001-3.139-.69-4.219-1.78L11.004 13H4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgRefresh02Icon;
