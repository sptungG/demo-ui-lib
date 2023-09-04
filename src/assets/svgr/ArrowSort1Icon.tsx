import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowSort1Icon(props: ISvgProps) {
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
        d="M6.167 3.667v13.475l-2.159-2.15-1.175 1.175L7 20.333l4.167-4.166-1.175-1.175-2.159 2.15V3.667H6.167ZM17.833 20.333V6.858l2.159 2.15 1.175-1.175L17 3.667l-4.167 4.166 1.175 1.175 2.159-2.15v13.475h1.666Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowSort1Icon;
