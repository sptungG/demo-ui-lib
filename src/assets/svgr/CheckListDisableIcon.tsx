import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgCheckListDisableIcon(props: ISvgProps) {
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
      <path
        d="M20.2 3.413c-.45-.338-1.012-.563-1.574-.563h-3.263c-.225-.788-1.012-1.35-1.8-1.35h-3.262c-.788 0-1.575.563-1.8 1.35H5.35C4 2.85 2.988 3.975 2.988 5.213v16.424c0 1.35 1.125 2.363 2.363 2.363h13.275c1.35 0 2.362-1.125 2.362-2.363V5.213c.113-.788-.225-1.35-.787-1.8ZM9.514 19.274l-2.25 2.138a.86.86 0 0 1-.562.224c-.225 0-.338-.112-.563-.224L5.126 20.4c-.113-.112-.225-.337-.225-.45 0-.225.112-.337.225-.563.225-.224.675-.224 1.012 0l.563.563 1.8-1.688c.225-.224.675-.224 1.012 0 .113.113.113.338.113.563 0 .113 0 .338-.113.45Zm0-5.512L7.263 15.9c-.225.225-.337.225-.562.225-.225 0-.338-.113-.563-.225L5.126 15c-.113-.113-.225-.338-.225-.45 0-.225.112-.338.225-.563.225-.225.675-.225 1.012 0l.563.563 1.8-1.688c.225-.225.675-.225 1.012 0a.86.86 0 0 1 .225.563c-.112.112-.112.225-.225.337Zm0-5.513-2.25 2.137a.86.86 0 0 1-.562.226c-.225 0-.338-.113-.563-.226L5.126 9.375c-.113-.113-.225-.338-.225-.45 0-.225.112-.338.225-.563.225-.225.675-.225 1.012 0l.563.563 1.8-1.688c.225-.224.675-.224 1.012 0 .225.226.225.675 0 1.013Zm.563-4.05v-.788c0-.112.112-.224.112-.224h3.263c.112 0 .112.112.112.224V4.2c0 .112-.112.225-.112.225h-3.263s-.112-.112-.112-.225Zm7.65 16.313h-5.288c-.45 0-.787-.45-.787-.9s.337-.9.787-.9h5.288c.45 0 .787.45.787.9s-.337.9-.787.9Zm0-5.4h-5.288c-.45 0-.787-.45-.787-.9s.337-.9.787-.9h5.288c.45 0 .787.45.787.9s-.337.9-.787.9Zm0-4.726h-5.288c-.45 0-.787-.45-.787-.9 0-.562.337-.9.787-.9h5.288c.45 0 .787.45.787.9s-.337.9-.787.9Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}
export default SvgCheckListDisableIcon;
