import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWebIcon(props: ISvgProps) {
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
        d="M12 2c5.523 0 10 4.468 10 9.98 0 5.513-4.477 9.981-10 9.981s-10-4.468-10-9.98C2 6.468 6.477 2 12 2Zm2.973 10.98H9.027c.11 1.999.551 3.82 1.225 5.165.628 1.254 1.3 1.82 1.747 1.82.448 0 1.119-.566 1.747-1.82.674-1.346 1.115-3.166 1.226-5.166Zm4.965 0h-2.963c-.12 2.43-.678 4.602-1.513 6.202a7.995 7.995 0 0 0 4.476-6.202Zm-12.913 0H4.062A7.993 7.993 0 0 0 8.54 19.18c-.784-1.5-1.322-3.503-1.486-5.749l-.028-.452Zm1.513-8.2-.026.013a7.992 7.992 0 0 0-4.45 6.19h2.963c.12-2.43.678-4.604 1.513-6.204ZM12 3.995l-.081.006c-.446.063-1.075.634-1.665 1.814-.675 1.346-1.116 3.167-1.226 5.167h5.945c-.111-2-.552-3.821-1.226-5.167-.628-1.253-1.299-1.82-1.747-1.82Zm3.461.784.023.042c.823 1.596 1.372 3.752 1.491 6.161h2.963a7.993 7.993 0 0 0-4.477-6.203Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWebIcon;
