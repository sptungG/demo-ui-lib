import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPasswordIcon(props: ISvgProps) {
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
        d="M18.125 22H6.875A1.877 1.877 0 0 1 5 20.125v-8.75C5 10.341 5.842 9.5 6.875 9.5h11.25c1.033 0 1.875.84 1.875 1.875v8.75A1.877 1.877 0 0 1 18.125 22ZM7.5 11.167c-.344 0-.833.488-.833.833v7.5c0 .345.489.833.833.833h10c.344 0 .833-.488.833-.833V12c0-.345-.489-.833-.833-.833h-10Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M16.667 10.75c-.345 0-.834-.28-.834-.625V7c0-2.067-1.265-3.333-3.333-3.333-2.068 0-3.333 1.266-3.333 3.333v3.125c0 .345-.489.625-.834.625s-.833-.28-.833-.625V7c0-2.758 2.242-5 5-5s5 2.242 5 5v3.125c0 .345-.488.625-.833.625ZM12.5 16.583c-1.25 0-2.083-.833-2.083-2.083 0-1.25.833-2.083 2.083-2.083 1.25 0 2.083.833 2.083 2.083 0 1.25-.833 2.083-2.083 2.083Zm0-2.5a.417.417 0 1 0 .001.835.417.417 0 0 0-.001-.835Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M12.5 19.5c-.46 0-.833-.33-.833-.735v-2.696c0-.406.373-.736.833-.736.46 0 .833.33.833.736v2.696c0 .406-.373.735-.833.735Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPasswordIcon;
