import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgExportIcon(props: ISvgProps) {
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
        d="M22 11.273v6.545a2.646 2.646 0 0 1-2.727 2.546H4.727A2.646 2.646 0 0 1 2 17.818v-6.545a.91.91 0 0 1 1.818 0v6.545a.845.845 0 0 0 .91.727h14.545a.846.846 0 0 0 .909-.727v-6.545a.909.909 0 0 1 1.818 0ZM9.81 8.39 11.09 7.1v7.81a.909.909 0 0 0 1.82 0V7.1l1.28 1.29a.91.91 0 0 0 1.556-.645.912.912 0 0 0-.264-.645l-2.836-2.836A.91.91 0 0 0 12.063 4h-.173a.909.909 0 0 0-.491.218h-.046L8.518 7.1A.913.913 0 0 0 9.81 8.39Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgExportIcon;
