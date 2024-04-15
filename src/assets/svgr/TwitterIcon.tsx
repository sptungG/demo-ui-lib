import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgTwitterIcon(props: ISvgProps) {
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
        d="M22.46 6.012a8.58 8.58 0 0 1-2.466.676 4.305 4.305 0 0 0 1.887-2.374 8.591 8.591 0 0 1-2.725 1.041 4.292 4.292 0 0 0-7.313 3.914 12.184 12.184 0 0 1-8.846-4.483 4.271 4.271 0 0 0-.581 2.157 4.29 4.29 0 0 0 1.91 3.572 4.276 4.276 0 0 1-1.945-.537v.054c0 2.08 1.48 3.814 3.443 4.209a4.296 4.296 0 0 1-1.939.073 4.296 4.296 0 0 0 4.01 2.98 8.61 8.61 0 0 1-5.33 1.838c-.347 0-.688-.02-1.024-.06A12.147 12.147 0 0 0 8.12 21c7.893 0 12.21-6.54 12.21-12.21 0-.187-.004-.372-.012-.556a8.719 8.719 0 0 0 2.141-2.222Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgTwitterIcon;
