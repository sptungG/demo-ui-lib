import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgMoneyBagIcon(props: ISvgProps) {
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
        d="M9.04 5.717h6.49l1.4-1.144a1.446 1.446 0 0 0 .453-1.607A1.4 1.4 0 0 0 16.05 2H8.52a1.4 1.4 0 0 0-1.333.968 1.445 1.445 0 0 0 .453 1.606l1.4 1.143ZM15.642 7.133H8.93C6.719 9.348 5 13.233 5 16.425 5 19.2 6.439 22 9.655 22h5.465c2.747 0 4.453-2.137 4.453-5.575 0-3.193-1.72-7.077-3.931-9.292Zm-3.663 6.814h.615c.946 0 1.716.785 1.716 1.75 0 .87-.613 1.583-1.417 1.729v.65c0 .343-.271.62-.607.62a.613.613 0 0 1-.607-.62v-.62h-.81a.613.613 0 0 1-.607-.619c0-.342.272-.619.607-.619h1.725c.277 0 .501-.23.501-.512a.51.51 0 0 0-.501-.52h-.616c-.946 0-1.716-.785-1.716-1.751 0-.869.613-1.582 1.417-1.728v-.65c0-.343.272-.62.607-.62.336 0 .607.277.607.62v.619h.81c.336 0 .607.277.607.62 0 .341-.271.619-.607.619H11.98a.508.508 0 0 0-.502.512c0 .29.225.52.502.52Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgMoneyBagIcon;
