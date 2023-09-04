import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageCancelFilledIcon(props: ISvgProps) {
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
        d="M9.307 1h-4.32c-.54 0-1.08.332-1.412.748L1.332 5.985h7.56L9.307 1ZM18.696 5.985 16.41 1.872c-.29-.54-.83-.872-1.37-.872h-4.32l.415 4.985h7.56ZM19.028 9.432a8.44 8.44 0 0 0-2.285-.332c-4.195 0-7.685 3.448-7.685 7.685 0 .747.125 1.495.333 2.284H2.412C1.665 19.028 1 18.404 1 17.615V7.355h18.028v2.077Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M20.854 12.548c-2.284-2.285-5.94-2.285-8.307 0-2.285 2.284-2.285 5.94 0 8.307 2.284 2.368 5.94 2.285 8.307 0 2.285-2.367 2.285-6.064 0-8.307Zm-2.783 6.355-1.287-1.288-1.288 1.288c-.208.208-.665.208-.955 0-.208-.208-.208-.665 0-.955l1.287-1.288-1.287-1.288c-.25-.249-.25-.664-.042-.997.208-.207.665-.207.955 0l1.288 1.288 1.288-1.288c.207-.207.664-.207.955 0 .208.208.208.665 0 .956l-1.287 1.287 1.287 1.288c.208.208.208.665 0 .956-.29.249-.706.249-.914.041Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackageCancelFilledIcon;
