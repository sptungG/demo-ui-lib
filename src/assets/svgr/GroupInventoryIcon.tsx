import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgGroupInventoryIcon(props: ISvgProps) {
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
        d="M22 6.77V.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.34a12.1 12.1 0 0 0-6-1.59C5.375 1.5-.013 6.784 0 13.273c.002.403.347.725.75.725H2v9a1 1 0 0 0 1 1h2V12h14v12h2a1 1 0 0 0 1-1v-9h1.25c.403 0 .748-.322.75-.726a11.506 11.506 0 0 0-2-6.504Z"
        fill="#08F"
      />
      <path
        d="M7.747 21.499h8.5a1.25 1.25 0 1 1 0 2.501h-8.5a1.25 1.25 0 1 1 0-2.501ZM7.747 17.5h8.5a1.25 1.25 0 1 1 0 2.5h-8.5a1.25 1.25 0 1 1 0-2.5ZM7.747 13.5h8.5a1.25 1.25 0 1 1 0 2.5h-8.5a1.25 1.25 0 1 1 0-2.5Z"
        fill="#08F"
      />
    </svg>
  );
}
export default SvgGroupInventoryIcon;
