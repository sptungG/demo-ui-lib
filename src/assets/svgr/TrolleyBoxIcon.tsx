import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgTrolleyBoxIcon(props: ISvgProps) {
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
        d="M20.847 17.63a.587.587 0 0 0-.587.586c0 .682-.555 1.236-1.236 1.236H8.82a1.969 1.969 0 0 0-1.284-1.283V4.547c0-.653-.41-1.247-1.02-1.478l-2.722-1.03a.587.587 0 1 0-.416 1.097l2.722 1.03c.157.06.263.213.263.381v13.622a1.964 1.964 0 0 0-1.374 1.87C4.99 21.12 5.87 22 6.95 22c.877 0 1.621-.578 1.871-1.374h10.203a2.413 2.413 0 0 0 2.41-2.41.587.587 0 0 0-.587-.587ZM6.95 20.826a.788.788 0 0 1 0-1.573.788.788 0 0 1 0 1.573Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
      <path
        d="M17.575 8.23h-7.06c-.749 0-1.358.61-1.358 1.358v7.06c0 .748.61 1.358 1.358 1.358h7.06c.749 0 1.358-.61 1.358-1.359V9.588c0-.749-.61-1.358-1.358-1.358Zm-4.156 1.174h1.252v1.379a.626.626 0 0 1-1.252 0v-1.38Zm4.34 7.243a.185.185 0 0 1-.184.185h-7.06a.185.185 0 0 1-.184-.185V9.588c0-.102.083-.184.184-.184h1.73v1.379c0 .992.808 1.799 1.8 1.799s1.8-.807 1.8-1.8V9.405h1.73c.101 0 .184.082.184.184v7.06Z"
        fill={colorCheck(props.color) || `currentColor`}
        stroke={colorCheck(props.color) || `currentColor`}
        strokeWidth={0.5}
      />
    </svg>
  );
}

export default SvgTrolleyBoxIcon;
