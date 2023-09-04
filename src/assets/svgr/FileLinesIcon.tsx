import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFileLinesIcon(props: ISvgProps) {
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
        d="M20.49 8.37c0-.11 0-.11 0 0-.11-.22-.11-.33-.22-.44l-6.6-6.6c-.11-.11-.22-.22-.33-.22h-.11C13.12 1 13.12 1 13.01 1H5.2C3.99 1 3 1.99 3 3.2v17.6c0 1.21.99 2.2 2.2 2.2h13.2c1.21 0 2.2-.99 2.2-2.2V8.59c0-.11 0-.11-.11-.22Zm-3.63-.77H14V4.74l2.86 2.86ZM5.2 20.8V3.2h6.6v5.5c0 .66.44 1.1 1.1 1.1h5.5v11H5.2Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M8.5 16.51v2.2h6.6v-2.2H8.5ZM8.5 12.55v2.2h6.6v-2.2H8.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFileLinesIcon;
