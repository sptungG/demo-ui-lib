import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSlider02Icon(props: ISvgProps) {
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
        d="M9.5 9.5A3.502 3.502 0 0 0 12.855 7H22V5h-9.145A3.502 3.502 0 0 0 6 6a3.5 3.5 0 0 0 3.5 3.5ZM11 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16.5 15.5a3.502 3.502 0 0 0 3.355-2.5H22v-2h-2.145A3.502 3.502 0 0 0 13 12a3.5 3.5 0 0 0 3.5 3.5Zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7.5 21.5A3.5 3.5 0 1 0 4.145 17H2v2h2.145A3.502 3.502 0 0 0 7.5 21.5Zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M12 17h10v2H12v-2ZM12 11H2v2h10v-2ZM5 5H2v2h3V5Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgSlider02Icon;
