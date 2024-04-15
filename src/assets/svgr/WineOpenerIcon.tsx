import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgWineOpenerIcon(props: ISvgProps) {
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
        d="M12.343 4.253c.337-.337.795-.337 1.132 0l6.454 6.454c.337.337.337.795 0 1.131-.337.337-.794.337-1.131 0L15.82 8.861a1 1 0 0 0-.5-.5l-2.978-2.977c-.336-.337-.336-.795 0-1.131Zm1.106 5.065-2.52-2.52c-1.118-1.118-1.118-2.842 0-3.96 1.118-1.117 2.842-1.117 3.96 0l6.454 6.455c1.118 1.118 1.118 2.842 0 3.96-1.117 1.117-2.842 1.117-3.96 0l-2.52-2.52-4.093 4.092.316 3.073a1 1 0 0 1-1.32 1.048l-4.339-1.492.204 1.99a1 1 0 0 1-.288.809l-1.636 1.636a1 1 0 0 1-1.414-1.414l1.3-1.3-.315-3.073a1 1 0 0 1 1.32-1.048l4.338 1.492-.204-1.99a1 1 0 0 1 .288-.809l4.43-4.429Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgWineOpenerIcon;
