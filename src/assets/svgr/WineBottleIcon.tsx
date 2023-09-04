import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWineBottleIcon(props: ISvgProps) {
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
        d="M8.667 4h.193l-.275 5.029a.998.998 0 0 0-.002.054c0 .54-.294 1.07-.788 1.407C6.659 11.184 6 12.427 6 13.75v7.583a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V13.75c0-1.323-.659-2.566-1.794-3.26-.438-.299-.728-.818-.792-1.48L15.14 4h.193a1 1 0 1 0 0-2H8.667a1 1 0 1 0 0 2Zm1.916 5.113L10.863 4h2.274l.281 5.138a.86.86 0 0 0 .003.036c.105 1.155.64 2.291 1.691 2.991a.936.936 0 0 0 .04.026c.516.31.848.891.848 1.559v6.583H8V13.75c0-.668.332-1.25.848-1.56a.936.936 0 0 0 .04-.025c.989-.659 1.685-1.777 1.695-3.052Zm.75 7.22a.667.667 0 1 1 1.334 0 .667.667 0 0 1-1.334 0ZM12 13.667A2.667 2.667 0 1 0 12 19a2.667 2.667 0 0 0 0-5.333Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWineBottleIcon;
