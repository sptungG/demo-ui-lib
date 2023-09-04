import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCommentCheckIcon(props: ISvgProps) {
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
        d="M16.707 7.853 11 13.56 7.293 9.854 8.707 8.44 11 10.732l4.293-4.293 1.414 1.414Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3h14c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2H9a2 2 0 0 0-1.2.4L3 21V5c0-1.103.897-2 2-2Zm3.334 12H19V5H5v12l2.134-1.6a2 2 0 0 1 1.2-.4Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCommentCheckIcon;
