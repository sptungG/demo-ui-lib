import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgVoucher3Icon(props: ISvgProps) {
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
        d="M22.365 9.654c.35 0 .635-.284.635-.635V5.635A.635.635 0 0 0 22.365 5H8.404v3.173a.635.635 0 0 1-1.27 0V5h-5.5A.635.635 0 0 0 1 5.635v3.384c0 .35.284.635.635.635 1.05 0 1.903.854 1.903 1.904 0 1.05-.854 1.903-1.903 1.903a.635.635 0 0 0-.635.635v3.385c0 .35.284.634.635.634h5.5v-3.173a.635.635 0 0 1 1.269 0v3.173h13.961c.35 0 .635-.284.635-.634v-3.385a.635.635 0 0 0-.635-.635 1.906 1.906 0 0 1-1.903-1.903c0-1.05.854-1.904 1.903-1.904Zm-13.961 2.75a.635.635 0 0 1-1.27 0V10.71a.635.635 0 0 1 1.27 0v1.693Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgVoucher3Icon;
