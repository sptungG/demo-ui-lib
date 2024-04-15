import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSelectMultipleIcon(props: ISvgProps) {
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
        d="m13 13.56 5.707-5.706-1.414-1.414L13 10.732 10.707 8.44 9.293 9.854 13 13.56Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2ZM8 16V4h12l.002 12H8Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgSelectMultipleIcon;
