import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLink02Icon(props: ISvgProps) {
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
        d="m12.707 15.536 1.414 1.414L12 19.07A5 5 0 1 1 4.929 12L7.05 9.879l1.414 1.414-2.12 2.121a3 3 0 1 0 4.242 4.243l2.121-2.121ZM11.293 8.464 9.879 7.05 12 4.93A5 5 0 0 1 19.071 12l-2.121 2.121-1.414-1.414 2.12-2.121a3 3 0 1 0-4.242-4.243l-2.121 2.121Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m14.829 7.757-7.072 7.071 1.415 1.415 7.07-7.071-1.414-1.415Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgLink02Icon;
