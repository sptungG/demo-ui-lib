import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCoffeeCup3Icon(props: ISvgProps) {
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
        d="M16.439 2.553A1 1 0 0 1 17.333 2h2.5a1 1 0 1 1 0 2h-1.882l-.858 1.716a6.796 6.796 0 0 1 1.17 2.95H19a1 1 0 1 1 0 2h-.8l-1.543 10.809a1 1 0 0 1-.99.858H7.333a1 1 0 0 1-.99-.858L4.8 10.667H4a1 1 0 1 1 0-2h.738A6.792 6.792 0 0 1 11.5 2.833c1.552 0 2.976.506 4.118 1.362l.82-1.642Zm-1.29 3.922A4.812 4.812 0 0 0 11.5 4.833a4.792 4.792 0 0 0-4.733 3.834h9.466a4.79 4.79 0 0 0-1.084-2.192Zm-8.33 4.192 1.382 9.666h6.598l1.381-9.666H6.82Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCoffeeCup3Icon;
