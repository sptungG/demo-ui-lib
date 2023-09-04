import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFacebookIcon(props: ISvgProps) {
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
        d="M18.487.005 15.375 0c-3.497 0-5.756 2.318-5.756 5.906V8.63h-3.13A.49.49 0 0 0 6 9.12v3.945c0 .27.22.49.49.49h3.129v9.956c0 .27.219.489.489.489h4.083c.27 0 .489-.22.489-.49v-9.956h3.659a.49.49 0 0 0 .49-.489V9.119a.49.49 0 0 0-.489-.49h-3.66V6.322c0-1.11.264-1.673 1.71-1.673h2.096c.27 0 .49-.22.49-.49V.494a.49.49 0 0 0-.49-.489Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFacebookIcon;
