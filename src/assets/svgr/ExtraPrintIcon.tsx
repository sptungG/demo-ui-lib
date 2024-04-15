import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgExtraPrintIcon(props: ISvgProps) {
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
        d="M6.75 3v5.25h-1.5A2.261 2.261 0 0 0 3 10.5V18h3.75v3h10.5v-3H21v-7.5a2.262 2.262 0 0 0-2.25-2.25h-1.5V3H6.75Zm1.5 1.5h7.5v3.75h-7.5V4.5Zm-3 5.25h13.5c.424 0 .75.325.75.75v6h-2.25v-3H6.75v3H4.5v-6c0-.425.325-.75.75-.75Zm.75.75a.752.752 0 0 0-.75.75c0 .412.338.75.75.75s.75-.338.75-.75A.752.752 0 0 0 6 10.5ZM8.25 15h7.5v4.5h-7.5V15Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgExtraPrintIcon;
