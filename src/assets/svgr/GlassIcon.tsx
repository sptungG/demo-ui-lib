import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgGlassIcon(props: ISvgProps) {
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
        d="M3 2a1 1 0 0 0-1 1v16c0 1.474 1.035 3 2.667 3h10c1.632 0 2.666-1.526 2.666-3v-2h2.334c1.632 0 2.666-1.526 2.666-3V8c0-1.474-1.034-3-2.666-3h-2.334V3a1 1 0 0 0-1-1H3Zm12.333 4V4H4v15c0 .726.465 1 .667 1h10c.201 0 .666-.274.666-1V6Zm2 9V7h2.334c.201 0 .666.274.666 1v6c0 .726-.465 1-.666 1h-2.334Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgGlassIcon;
