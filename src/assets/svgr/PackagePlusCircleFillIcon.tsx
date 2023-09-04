import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackagePlusCircleFillIcon(props: ISvgProps) {
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
        d="m9.688 2.018-4.047.017a1.45 1.45 0 0 0-1.265.749L2.26 6.614l7.02-.016.407-4.58ZM18.397 6.58l-2.14-3.83A1.463 1.463 0 0 0 14.985 2l-4.047.016.424 4.58 7.036-.016ZM18.664 9.819a7.157 7.157 0 0 0-2.082-.309 7.083 7.083 0 0 0-6.762 9.168l-6.47.017h-.008a1.317 1.317 0 0 1-1.308-1.316L2 7.862l7.702-.017h1.25l7.702-.025.01 1.999Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M16.582 11.176a5.423 5.423 0 0 0-5.412 5.412A5.423 5.423 0 0 0 16.582 22a5.423 5.423 0 0 0 5.412-5.412c0-2.98-2.43-5.412-5.412-5.412Zm2.29 6.036h-1.665v1.666a.63.63 0 0 1-.625.624.63.63 0 0 1-.624-.624v-1.666h-1.665a.63.63 0 0 1-.625-.624.63.63 0 0 1 .625-.625h1.665v-1.665a.63.63 0 0 1 .624-.624.63.63 0 0 1 .625.624v1.665h1.665a.63.63 0 0 1 .624.625.628.628 0 0 1-.624.624Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackagePlusCircleFillIcon;
