import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWineBottle2Icon(props: ISvgProps) {
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
        d="M7.667 3a1 1 0 0 0 .833.986v4.819C7.036 9.223 6 10.547 6 12.167v9.166a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9.166c0-1.62-1.036-2.944-2.5-3.362V3.986A1 1 0 0 0 15.334 2H8.667a1 1 0 0 0-1 1ZM16 12.833v-.666c0-.865-.636-1.5-1.5-1.5a1 1 0 0 1-1-1V4h-3v5.667a1 1 0 0 1-1 1c-.864 0-1.5.635-1.5 1.5v8.166h8V19h-3.166a1 1 0 0 1-1-1v-4.167a1 1 0 0 1 1-1H16ZM16 17h-2.166v-2.167H16V17Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWineBottle2Icon;
