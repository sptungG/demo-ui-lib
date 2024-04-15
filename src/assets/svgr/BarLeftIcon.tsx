import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgBarLeftIcon(props: ISvgProps) {
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
        d="M6.636 2A4.647 4.647 0 0 0 2 6.636v1.819a1 1 0 0 0 2 0V6.636A2.647 2.647 0 0 1 6.636 4h1.728v2.199c-2.296 2.216-3.637 5.588-3.637 8.62 0 2.356.922 4.494 2.339 6.112a1 1 0 0 0 .752.342h11.273a1 1 0 0 0 .752-.342c1.417-1.618 2.339-3.756 2.339-6.113 0-2.883-1.213-6.075-3.307-8.287L21.073 3.6a1 1 0 0 0-.8-1.6H6.636Zm11.637 2-1.227 1.636h-6.682V4h7.909Zm-8.52 3.636c-1.882 1.817-3.026 4.66-3.026 7.182 0 1.668.597 3.216 1.562 4.455H18.62c.965-1.24 1.562-2.787 1.562-4.455 0-2.522-1.144-5.365-3.027-7.182H9.754Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgBarLeftIcon;
