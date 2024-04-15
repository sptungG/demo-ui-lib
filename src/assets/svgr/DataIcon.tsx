import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgDataIcon(props: ISvgProps) {
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
        d="M20 17.556V6.444C20 4.036 16.337 2 12 2S4 4.036 4 6.444v11.112C4 19.964 7.663 22 12 22s8-2.036 8-4.444ZM12 4.222c3.691 0 5.931 1.675 6 2.216-.069.554-2.309 2.229-6 2.229S6.069 6.992 6 6.45c.069-.554 2.309-2.229 6-2.229Zm-6 5.12c1.479.94 3.637 1.547 6 1.547s4.521-.607 6-1.548v2.652c-.069.555-2.309 2.23-6 2.23S6.069 12.547 6 12V9.341Zm0 8.214v-2.66c1.479.942 3.637 1.548 6 1.548s4.521-.606 6-1.547v2.652c-.069.554-2.309 2.229-6 2.229s-5.931-1.675-6-2.222Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgDataIcon;
