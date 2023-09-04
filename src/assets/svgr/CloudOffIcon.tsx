import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCloudOffIcon(props: ISvgProps) {
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
        d="M3.414 3.586 2 5l3.045 3.045-.02.034A6.002 6.002 0 0 0 6 20h11l1.97 1.97 1.415-1.414-16.97-16.97Zm3.4 6.227L15 18H6a4 4 0 0 1-.652-7.947l1.465-.24Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="m7.829 5.172 1.469 1.47a6.003 6.003 0 0 1 8.524 3.9l.322 1.291 1.316.202a3.001 3.001 0 0 1 .881 5.65l1.458 1.457-.005.005a5.001 5.001 0 0 0-2.031-9.09A8.003 8.003 0 0 0 7.829 5.173Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCloudOffIcon;
