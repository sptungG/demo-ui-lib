import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgShareIcon(props: ISvgProps) {
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
        d="M7.857 14.07A3.478 3.478 0 0 1 5.5 15C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8c1.229 0 2.308.64 2.933 1.602l5.684-3.249A3.483 3.483 0 0 1 14 5.5C14 3.57 15.57 2 17.5 2S21 3.57 21 5.5 19.43 9 17.5 9c-.91 0-1.733-.358-2.358-.93l-6.151 3.515a3.348 3.348 0 0 1-.108.768l6.26 3.577A3.478 3.478 0 0 1 17.5 15c1.93 0 3.5 1.57 3.5 3.5S19.43 22 17.5 22 14 20.43 14 18.5c0-.296.048-.578.117-.853l-6.26-3.577Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgShareIcon;
