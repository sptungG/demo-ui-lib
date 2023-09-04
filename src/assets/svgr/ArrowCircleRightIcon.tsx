import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowCircleRightIcon(props: ISvgProps) {
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
        d="M4.908 19.092c-3.886-3.885-3.86-10.21.056-14.128 3.917-3.917 10.243-3.942 14.128-.056 3.886 3.885 3.86 10.21-.056 14.128-3.917 3.917-10.242 3.942-14.128.056ZM8 13h5.17l-1.88 1.89a.996.996 0 1 0 1.41 1.41l3.94-3.94c.2-.2.2-.51 0-.71L12.7 7.71a.996.996 0 1 0-1.41 1.41L13.17 11H8c-.55 0-1 .45-1 1s.45 1 1 1Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowCircleRightIcon;
