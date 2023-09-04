import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgHistoryIcon(props: ISvgProps) {
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
      <g clipPath="url(#history-icon_svg__a)" fill={colorCheck(props.color) || `currentColor`}>
        <path d="M8.87 4.885a.821.821 0 0 1-1.028.537l-.627-.196a8.386 8.386 0 1 0 1.663-.803.814.814 0 0 1-.008.462Zm.821 2.635a.82.82 0 0 1 1.642 0v4.466c0 .368.3.668.668.668h2.977a.82.82 0 0 1 0 1.641h-2.977a2.312 2.312 0 0 1-2.31-2.31V7.52Z" />
        <path d="M19.916 4.084a11.592 11.592 0 0 0-8.25-3.417c-1.7 0-3.364.367-4.888 1.07l.242-.617A.82.82 0 0 0 5.491.522L4.48 3.111a1.127 1.127 0 0 0 .71 1.48l2.026.635a8.366 8.366 0 0 1 1.663-.803.82.82 0 0 0-.546-.566l-1.309-.411a9.996 9.996 0 0 1 4.644-1.138 9.96 9.96 0 0 1 7.089 2.937 9.959 9.959 0 0 1 2.936 7.089 9.96 9.96 0 0 1-2.936 7.088 9.96 9.96 0 0 1-7.09 2.937 9.96 9.96 0 0 1-7.088-2.937 9.959 9.959 0 0 1-2.936-7.088 9.92 9.92 0 0 1 1.076-4.526.82.82 0 0 0-1.464-.742A11.54 11.54 0 0 0 0 12.333a11.59 11.59 0 0 0 3.417 8.25A11.59 11.59 0 0 0 11.667 24a11.59 11.59 0 0 0 8.25-3.417 11.59 11.59 0 0 0 3.416-8.25 11.59 11.59 0 0 0-3.417-8.25Z" />
      </g>
      <defs>
        <clipPath id="history-icon_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgHistoryIcon;
