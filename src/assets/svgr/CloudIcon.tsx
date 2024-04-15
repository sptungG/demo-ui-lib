import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCloudIcon(props: ISvgProps) {
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
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <g clipPath="url(#cloud-icon_svg__a)">
        <path
          d="M6.881 20a6 6 0 0 1-.975-11.921 8.003 8.003 0 0 1 14.737 1.979A5.001 5.001 0 0 1 19.882 20h-13Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="cloud-icon_svg__a">
          <path fill="#fff" transform="translate(.881)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCloudIcon;
