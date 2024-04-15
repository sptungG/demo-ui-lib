import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgShieldCheckIcon(props: ISvgProps) {
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
        d="M20.978 7.15c-.01-.54-.02-1.05-.02-1.544 0-.387-.317-.7-.708-.7-3.029 0-5.335-.86-7.257-2.708a.714.714 0 0 0-.987 0C10.084 4.046 7.779 4.906 4.75 4.906a.704.704 0 0 0-.708.7c0 .494-.01 1.004-.02 1.544-.097 5.025-.23 11.907 8.246 14.811a.716.716 0 0 0 .463 0c8.477-2.904 8.344-9.786 8.247-14.811ZM12.5 20.557c-7.27-2.61-7.16-8.329-7.062-13.38l.015-.885c2.837-.119 5.105-.968 7.047-2.64 1.941 1.672 4.21 2.521 7.047 2.64l.015.884c.098 5.052.207 10.77-7.062 13.381Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="m14.938 9.568-3.418 3.379-1.458-1.442a.714.714 0 0 0-1.002 0 .694.694 0 0 0 0 .99l1.96 1.937a.71.71 0 0 0 1.001 0l3.919-3.874a.694.694 0 0 0 0-.99.714.714 0 0 0-1.002 0Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgShieldCheckIcon;
