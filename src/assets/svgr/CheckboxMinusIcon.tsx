import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgCheckboxMinusIcon(props: ISvgProps) {
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
        d="M6.286 4A2.288 2.288 0 0 0 4 6.286v11.428A2.288 2.288 0 0 0 6.286 20h11.428A2.288 2.288 0 0 0 20 17.714V6.286A2.288 2.288 0 0 0 17.714 4H6.286Zm0 13.714V6.286h11.428l.003 11.428H6.286Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path fill={colorCheck(props.color) || `currentColor`} d="M8 11h8v2.667H8z" />
    </svg>
  );
}
export default SvgCheckboxMinusIcon;
