import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgSketchIcon(props: ISvgProps) {
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
        d="M11.95 3.002a.712.712 0 0 1 .1 0l5.651.395a.708.708 0 0 1 .535.293l3.637 5.145.02.03a.669.669 0 0 1-.061.808l-9.29 11.073a.664.664 0 0 1-.25.192.707.707 0 0 1-.835-.192L2.168 9.673a.677.677 0 0 1-.04-.838l3.631-5.138a.688.688 0 0 1 .457-.29.713.713 0 0 1 .082-.01l5.652-.395Zm1.528 1.47 3.419.239-.345 3.373-3.074-3.613Zm-2.956 0-3.419.239.345 3.373 3.074-3.613Zm-1.65 4.073h6.256L12 4.869 8.872 8.545Zm-2.78 0-.26-2.55-1.803 2.55h2.064Zm.322 1.366 2.762 5.963-5.002-5.963h2.24Zm8.41 5.963 5.002-5.963h-2.24l-2.762 5.963Zm1.23-5.963L12 18.663 7.946 9.91h8.108Zm1.853-1.366h2.064l-1.803-2.55-.26 2.55Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgSketchIcon;
