import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBoxIcon(props: ISvgProps) {
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
        d="m21.24 6.62-8.832-4.474-.003-.002a1.38 1.38 0 0 0-1.25.012l-3.789 2.01a.59.59 0 0 0-.088.047l-4.54 2.41A1.373 1.373 0 0 0 2 7.841v8.316c0 .514.283.981.738 1.22l8.413 4.465.003.002a1.377 1.377 0 0 0 1.25.011l8.836-4.477c.47-.235.761-.706.761-1.231V7.852c0-.525-.291-.997-.76-1.231Zm-9.543-3.426a.205.205 0 0 1 .184-.002l8.267 4.189-3.217 1.602-8.083-4.277 2.85-1.512Zm-.5 17.347-7.911-4.2-.004-.001a.204.204 0 0 1-.11-.182V8.371l8.025 4.184v7.986Zm.592-8.998L3.808 7.38l3.79-2.012 8.042 4.256-3.851 1.918Zm9.04 4.605a.204.204 0 0 1-.113.183l-8.348 4.23v-7.998l3.844-1.914v2.007a.586.586 0 0 0 1.171 0v-2.59L20.83 8.35v7.798Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgBoxIcon;
