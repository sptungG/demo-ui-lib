import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgESmsIcon(props: ISvgProps) {
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
        d="M20.632 9.67h-.521v6.058c0 .912-.521 1.759-1.629 1.759H7.668v.26c0 .848.912 1.694 1.889 1.694h8.208l3.127 1.825-.456-1.825h.13c.978 0 1.434-.846 1.434-1.694v-6.644c0-.782-.39-1.434-1.368-1.434Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M16.853 5.5H4.345C3.238 5.5 2 6.477 2 7.39v7.556c0 .847 1.042 1.499 2.085 1.564l-.652 2.54 4.3-2.475h9.12c1.108 0 2.085-.651 2.085-1.629V7.39c0-.912-1.042-1.889-2.085-1.889ZM6.235 11.884a1.098 1.098 0 0 1-1.108-1.107c0-.586.521-1.108 1.108-1.108.651 0 1.107.522 1.107 1.108 0 .586-.456 1.107-1.107 1.107Zm4.234 0a1.098 1.098 0 0 1-1.107-1.107c0-.586.456-1.173 1.107-1.173.652 0 1.107.521 1.107 1.108 0 .586-.456 1.172-1.107 1.172Zm4.235 0a1.098 1.098 0 0 1-1.108-1.107c0-.586.521-1.108 1.108-1.108.651 0 1.107.522 1.107 1.108 0 .586-.521 1.107-1.107 1.107Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgESmsIcon;
