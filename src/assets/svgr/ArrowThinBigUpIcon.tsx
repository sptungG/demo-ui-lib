import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowThinBigUpIcon(props: ISvgProps) {
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
      <g clipPath="url(#arrow-thin-big-up-icon_svg__a)">
        <path
          d="M18.793 7.207 19.5 6.5 13 0 6.5 6.5l.707.707L12.5 1.914V24h1V1.914l5.293 5.293Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="arrow-thin-big-up-icon_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgArrowThinBigUpIcon;
