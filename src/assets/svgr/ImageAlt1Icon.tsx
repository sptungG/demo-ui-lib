import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgImageAlt1Icon(props: ISvgProps) {
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
        d="M31.667 5H8.333A3.337 3.337 0 0 0 5 8.333v23.334A3.337 3.337 0 0 0 8.333 35h23.334A3.337 3.337 0 0 0 35 31.667V8.333A3.337 3.337 0 0 0 31.667 5ZM8.333 31.667V8.333h23.334l.003 23.334H8.333Z"
        fill="#E8EAEB"
      />
      <path
        d="M16.667 23.333 15 21.667l-5 6.666h20l-8.333-11.666-5 6.666ZM14.167 18.333a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        fill="#E8EAEB"
      />
    </svg>
  );
}
export default SvgImageAlt1Icon;
