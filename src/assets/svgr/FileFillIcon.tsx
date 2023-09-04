import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgFileFillIcon(props: ISvgProps) {
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
        d="M11.715 23h7.347a1.37 1.37 0 0 0 1.37-1.37V2.37A1.37 1.37 0 0 0 19.063 1H9.272v.453c.005.047.008.096.008.145v3.754c0 1.065-.865 1.93-1.93 1.93H3.596c-.039 0-.08-.002-.12-.005H3V21.63C3 22.387 3.614 23 4.37 23h7.345Zm.277-4.658h-4.79a.648.648 0 0 1 0-1.295h4.793a.648.648 0 1 1-.003 1.295Zm4.793-3.306H7.202a.648.648 0 0 1 0-1.295h9.583a.648.648 0 0 1 0 1.295Zm-9.583-4.805h9.583a.648.648 0 0 1 0 1.295H7.202a.648.648 0 0 1 0-1.295Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M3.596 6.505H7.36a1.15 1.15 0 0 0 1.14-1.14V1.6a.577.577 0 0 0-.985-.407L3.186 5.52a.577.577 0 0 0 .41.984Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgFileFillIcon;
