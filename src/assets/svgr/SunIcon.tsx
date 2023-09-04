import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgSunIcon(props: ISvgProps) {
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
        d="M6.993 12A5.012 5.012 0 0 0 12 17.007 5.013 5.013 0 0 0 17.007 12 5.013 5.013 0 0 0 12 6.993 5.012 5.012 0 0 0 6.993 12ZM12 8.993A3.01 3.01 0 0 1 15.007 12 3.01 3.01 0 0 1 12 15.007 3.01 3.01 0 0 1 8.993 12 3.01 3.01 0 0 1 12 8.993ZM10.998 19h2v3h-2v-3Zm0-17h2v3h-2V2Zm-9 9h3v2h-3v-2Zm17 0h3v2h-3v-2ZM4.22 18.363l2.12-2.122 1.414 1.414-2.12 2.122-1.415-1.414ZM16.24 6.344l2.122-2.122 1.415 1.414-2.123 2.122-1.414-1.414ZM6.342 7.759l-2.12-2.122 1.414-1.414 2.12 2.122-1.414 1.414ZM19.776 18.363l-1.414 1.415-2.122-2.122 1.414-1.415 2.122 2.122Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgSunIcon;
