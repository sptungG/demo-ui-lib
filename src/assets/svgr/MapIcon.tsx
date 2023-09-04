import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMapIcon(props: ISvgProps) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="m2 19.72 7.108 2.37 6.969-3.982L22 20.477V4.323l-6.077-2.43-7.03 4.017L2 3.613V19.72Zm12-2.729-4 2.286V7.58l4-2.285V16.99Zm2-1.068 4 1.6V5.677l-3.923-1.57-.077.045v11.771ZM4 18.279l4 1.334V7.72L4 6.387V18.28Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMapIcon;
