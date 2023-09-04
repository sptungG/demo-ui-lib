import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCalendarIcon(props: ISvgProps) {
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
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <path
        d="M7 12.5h2v2H7v-2ZM7 16.5h2v2H7v-2ZM13 12.5h-2v2h2v-2ZM11 16.5h2v2h-2v-2ZM17 12.5h-2v2h2v-2ZM15 16.5h2v2h-2v-2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 22.5H5c-1.103 0-2-.897-2-2v-14c0-1.103.897-2 2-2h2v-2h2v2h6v-2h2v2h2c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2Zm0-14v-2H5v2h14Zm0 2 .001 10H5v-10h14Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCalendarIcon;
