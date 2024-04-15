import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCooliconsIcon(props: ISvgProps) {
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
        d="M7.714 6.286a5.69 5.69 0 0 1 2.59.619 7.85 7.85 0 0 0-1.43 2.483A2.857 2.857 0 1 0 10.571 12c0-1.45.539-2.772 1.428-3.78a5.714 5.714 0 1 1 0 7.56 5.714 5.714 0 1 1-4.286-9.494ZM13.43 12a2.857 2.857 0 1 0 5.714 0 2.857 2.857 0 0 0-5.714 0Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCooliconsIcon;
