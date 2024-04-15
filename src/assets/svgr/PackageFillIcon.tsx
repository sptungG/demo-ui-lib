import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgPackageFillIcon(props: ISvgProps) {
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
        d="m11.574 2.018-4.515.02c-.585 0-1.133.33-1.411.852l-2.36 4.36 7.831-.02.455-5.212ZM21.29 7.212l-2.386-4.36A1.627 1.627 0 0 0 17.483 2l-4.514.019.473 5.212 7.849-.019ZM21.584 10.21l.005-1.537h-.011v-.047l-8.593.029h-1.381L3.01 8.626v.047H3l.005 1.536L3 11.666c.003-.002.007-.002.01-.003l.027 7.841c0 .825.66 1.497 1.459 1.497h.01l7.788-.021 7.788.021h.01c.799 0 1.459-.672 1.459-1.497l.027-7.841a.048.048 0 0 0 .01.003l-.004-1.456Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgPackageFillIcon;
