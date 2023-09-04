import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgArrowSkipIcon(props: ISvgProps) {
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
        d="M11.673 8.46V5.52a.52.52 0 0 1 .319-.477.502.502 0 0 1 .56.108l5.88 5.704c.1.1.16.234.16.377a.5.5 0 0 1-.16.368l-5.88 5.712a.533.533 0 0 1-.56.109.52.52 0 0 1-.319-.477v-2.94h-.98a8.812 8.812 0 0 0-7.713 4.548l-.017.025a.518.518 0 0 1-.578.251.52.52 0 0 1-.385-.502c-.017-5.386 4.313-9.774 9.673-9.866Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M15.576 17.278a.67.67 0 0 0 .453-.176l5.762-5.444a.647.647 0 0 0 0-.955l-5.762-5.435a.66.66 0 0 0-.93.025.66.66 0 0 0 .025.93l5.26 4.958-5.26 4.958a.653.653 0 0 0-.025.93.63.63 0 0 0 .477.209Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgArrowSkipIcon;
