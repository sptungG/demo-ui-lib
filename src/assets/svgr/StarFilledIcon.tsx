import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgStarFilledIcon(props: ISvgProps) {
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
        d="m21.284 8.276-5.951-.865-2.66-5.393a.753.753 0 0 0-1.345 0l-2.66 5.393-5.952.865a.749.749 0 0 0-.414 1.28l4.305 4.197L5.59 19.68a.749.749 0 0 0 1.087.79L12 17.672l5.323 2.798a.749.749 0 0 0 1.087-.79l-1.017-5.927 4.305-4.198a.748.748 0 0 0 .218-.428.747.747 0 0 0-.632-.851Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgStarFilledIcon;
