import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgIcClearIcon(props: ISvgProps) {
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
      <g clipPath="url(#ic-clear-icon_svg__a)">
        <path
          d="M21.61 2.39a1.336 1.336 0 0 0-1.887 0l-5.315 5.316-3.16-3.16c-.8-.8-2.098-.8-2.898 0L6.074 6.822l.284.283-3.933 2.52a.921.921 0 0 0-.155 1.426l10.68 10.68a.92.92 0 0 0 1.426-.155l2.519-3.934.284.284 2.275-2.276c.8-.8.8-2.098 0-2.898l-3.16-3.16 5.316-5.315c.52-.52.52-1.367 0-1.887ZM13.443 19.62l-1.83-1.83 1.796-2.676-2.677 1.795-1.54-1.539 1.144-1.704-1.705 1.143-1.746-1.746 1.387-2.068-2.068 1.387-1.822-1.823 3.31-2.12 7.87 7.871-2.12 3.31Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="ic-clear-icon_svg__a">
          <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgIcClearIcon;
