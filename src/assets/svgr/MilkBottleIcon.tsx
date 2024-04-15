import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMilkBottleIcon(props: ISvgProps) {
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
        d="M10.25 4.25a.25.25 0 1 1 .5 0 .25.25 0 0 1-.5 0Zm2.483.28a2.25 2.25 0 1 0-4.466 0A5.11 5.11 0 0 0 3.76 8.667H3a1 1 0 1 0 0 2h.667v9a2.672 2.672 0 0 0 2.666 2.666h8.334a2.672 2.672 0 0 0 2.666-2.666V19h1.5a2.672 2.672 0 0 0 2.667-2.667v-2.5a2.672 2.672 0 0 0-2.667-2.666h-1.5v-1.5c0-2.694-1.988-4.862-4.6-5.137ZM10.5 6.5H8.833c-1.43 0-2.604.893-3.012 2.167h9.359C14.77 7.393 13.596 6.5 12.166 6.5H10.5Zm-1 8.833v-4.666H5.667v9c0 .364.302.666.666.666h8.334a.672.672 0 0 0 .666-.666v-9H11.5v4.666H13a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1.5Zm7.833-2.166V17h1.5a.672.672 0 0 0 .667-.667v-2.5a.672.672 0 0 0-.667-.666h-1.5Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMilkBottleIcon;
