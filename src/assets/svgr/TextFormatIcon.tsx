import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgTextFormatIcon(props: ISvgProps) {
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
        d="M16.462 18.705 10.948 4.44A.684.684 0 0 0 10.307 4H8.176a.69.69 0 0 0-.642.441l-5.51 14.264a.345.345 0 0 0 .32.469H4.52a.35.35 0 0 0 .324-.22l1.149-3.008a.345.345 0 0 1 .32-.22h5.856c.143 0 .272.087.324.22l1.149 3.007c.05.133.178.22.32.221h2.176a.347.347 0 0 0 .324-.47Zm-5.39-5.394H7.41a.361.361 0 0 1-.338-.493l1.831-4.79a.36.36 0 0 1 .676 0l1.835 4.79a.365.365 0 0 1-.342.493ZM21.977 18.705l-2.797-7.363a.69.69 0 0 0-.645-.445h-1a.69.69 0 0 0-.645.445l-1.255 3.304.834 2.166a.321.321 0 0 1 .18-.052h2.772c.142 0 .269.086.321.217l.793 1.98c.053.13.18.217.321.217h.8a.345.345 0 0 0 .32-.47Zm-3.114-3.325H17.21a.174.174 0 0 1-.162-.241l.824-2.062a.172.172 0 0 1 .324 0l.828 2.062a.175.175 0 0 1-.162.241Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgTextFormatIcon;
