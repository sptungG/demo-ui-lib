import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageTimeFilledIcon(props: ISvgProps) {
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
        d="M16.582 11.176a5.418 5.418 0 0 0-5.412 5.412A5.418 5.418 0 0 0 16.582 22a5.418 5.418 0 0 0 5.412-5.412 5.418 5.418 0 0 0-5.412-5.412Zm2.158 7.669a.623.623 0 0 1-.876.11l-1.874-1.458a.624.624 0 0 1-.241-.493v-2.706a.624.624 0 1 1 1.249 0v2.4l1.632 1.27c.273.212.321.604.11.877ZM9.686 2.017l-4.046.017a1.45 1.45 0 0 0-1.266.749L2.26 6.613l7.019-.016.407-4.58ZM18.396 6.58l-2.14-3.83A1.463 1.463 0 0 0 14.982 2l-4.046.016.424 4.58 7.036-.016Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M18.664 9.819a7.157 7.157 0 0 0-2.082-.309 7.082 7.082 0 0 0-6.762 9.168l-6.47.016h-.008c-.716 0-1.308-.59-1.308-1.315L2 7.862l7.702-.017h1.25l7.702-.025.01 1.999Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackageTimeFilledIcon;
