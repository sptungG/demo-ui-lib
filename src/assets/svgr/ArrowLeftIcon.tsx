import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowLeftIcon(props: ISvgProps) {
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
        d="M19.11 4.91c3.889 3.89 3.863 10.222-.057 14.143-3.921 3.92-10.253 3.946-14.142.056-3.89-3.89-3.865-10.22.056-14.142 3.921-3.92 10.253-3.946 14.142-.056Zm-6.36 2.806L8.858 11.61c-.19.19-.19.51 0 .7l3.904 3.894a.997.997 0 1 0 1.411-1.411L11.34 11.96l2.823-2.833a.997.997 0 1 0-1.411-1.411Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowLeftIcon;
