import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgIc24GlobeIcon(props: ISvgProps) {
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm2.972 11H9.028c.11 2.004.551 3.828 1.225 5.177C10.881 19.432 11.553 20 12 20c.448 0 1.119-.568 1.747-1.823.674-1.349 1.114-3.173 1.225-5.176Zm4.966.001h-2.963c-.12 2.434-.678 4.611-1.513 6.214a8.01 8.01 0 0 0 4.476-6.214Zm-12.913 0H4.062a8.007 8.007 0 0 0 4.477 6.214c-.784-1.503-1.322-3.51-1.486-5.76L7.025 13Zm1.513-8.216-.026.013A8.007 8.007 0 0 0 4.062 11h2.963c.12-2.435.678-4.612 1.513-6.215ZM12 4l-.081.006c-.446.063-1.075.635-1.666 1.817C9.58 7.172 9.138 8.996 9.027 11h5.946c-.111-2.004-.552-3.828-1.226-5.177C13.119 4.568 12.447 4 12 4Zm3.461.786.023.041c.823 1.6 1.372 3.76 1.491 6.173h2.963a8.007 8.007 0 0 0-4.477-6.214Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgIc24GlobeIcon;
