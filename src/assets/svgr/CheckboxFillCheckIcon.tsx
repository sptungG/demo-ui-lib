import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCheckboxFillCheckIcon(props: ISvgProps) {
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
        d="M5.778 5h12.444a.778.778 0 0 1 .778.778v12.444a.778.778 0 0 1-.778.778H5.778A.778.778 0 0 1 5 18.222V5.778A.778.778 0 0 1 5.778 5Zm5.447 10.111 2.749-2.75 2.75-2.75-1.1-1.1-4.4 4.4-2.2-2.2-1.1 1.1 3.3 3.3Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCheckboxFillCheckIcon;
