import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWaterGlassIcon(props: ISvgProps) {
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
        d="M3.259 2.329A1 1 0 0 1 4 2h16.364a1 1 0 0 1 .995 1.098l-1.637 16.546v.001c-.143 1.429-1.399 2.537-2.813 2.537H7.455c-1.415 0-2.67-1.108-2.814-2.537v-.001L3.005 3.098a1 1 0 0 1 .254-.77ZM5.104 4l.162 1.636h13.832L19.26 4H5.104Zm3.35 3.636v1.728a1 1 0 0 0 2 0V7.636H18.9l-1.168 11.81c-.04.39-.42.736-.823.736H7.455c-.404 0-.784-.346-.824-.735v-.001L5.463 7.636h2.992Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWaterGlassIcon;
