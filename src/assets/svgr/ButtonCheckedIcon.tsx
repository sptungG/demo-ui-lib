import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgButtonCheckedIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 23.591 21.965 1v15.532c0 3.899-2.933 7.06-6.551 7.06H1Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m13.135 19.035-1.85-1.868a.647.647 0 0 0-.923 0 .662.662 0 0 0 0 .93l2.544 2.569c.13.132.333.132.464 0l5.78-5.836a.662.662 0 0 0 0-.931.647.647 0 0 0-.921 0l-5.094 5.136Z"
        fill="#fff"
      />
    </svg>
  );
}
export default SvgButtonCheckedIcon;
