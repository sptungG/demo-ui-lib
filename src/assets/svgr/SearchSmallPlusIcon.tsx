import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSearchSmallPlusIcon(props: ISvgProps) {
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
        d="M12.234 12.81a5.035 5.035 0 0 0-7.76-6.336 5.034 5.034 0 0 0 6.336 7.76L16.576 20 18 18.576l-5.766-5.766Zm-2.065-4.912a3.02 3.02 0 1 1-4.271 4.271 3.02 3.02 0 0 1 4.271-4.27Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path d="M17 7V5h2v2h2v2h-2v2h-2V9h-2V7h2Z" fill={colorCheck(props.color) || `currentColor`} />
    </svg>
  );
}

export default SvgSearchSmallPlusIcon;
