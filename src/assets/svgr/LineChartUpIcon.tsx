import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgLineChartUpIcon(props: ISvgProps) {
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
      <path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3Z" fill={colorCheck(props.color) || `currentColor`} />
      <path
        d="M14.77 14.098a.985.985 0 0 0 1.374 0L21 9.344 19.627 8l-4.17 4.082-2.227-2.18a.985.985 0 0 0-1.374 0L7 14.656 8.373 16l4.17-4.082 2.227 2.18Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgLineChartUpIcon;
