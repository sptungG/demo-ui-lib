import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgDropboxIcon(props: ISvgProps) {
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
        d="M7.004 3.5 2 6.689l5.004 3.186 5.002-3.186L7.004 3.5Zm10.005 0-5.003 3.189 5.003 3.186 5.003-3.186L17.009 3.5ZM2 13.062l5.004 3.187 5.002-3.187-5.002-3.187L2 13.062Zm15.009-3.187-5.003 3.187 5.003 3.187 5.003-3.187-5.003-3.187ZM7.004 17.311l5.002 3.189 5.003-3.189-5.003-3.186-5.002 3.186Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgDropboxIcon;
