import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFnbSortIcon(props: ISvgProps) {
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
        d="M3.174 8H15V6H3.174C2.525 6 2 6.448 2 7s.525 1 1.174 1ZM3.174 12.5H15v-2H3.174c-.649 0-1.174.448-1.174 1s.525 1 1.174 1ZM3.34 15C2.6 15 2 15.448 2 16s.6 1 1.34 1h9.377a1.905 1.905 0 0 1-.162-.764c0-.441.155-.865.445-1.236H3.34Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M21.668 15.118c-.443-.542-1.16-.542-1.603 0L19 16.258V4.389C19 3.623 18.626 3 18 3s-1 .622-1 1.389v11.87l-1.065-1.14c-.442-.543-1.16-.543-1.603 0-.443.542-.443 1.421 0 1.963l2.866 3.511c.442.542 1.16.544 1.604 0l2.866-3.51c.443-.543.443-1.422 0-1.965Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFnbSortIcon;
