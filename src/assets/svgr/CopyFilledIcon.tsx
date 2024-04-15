import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgCopyFilledIcon(props: ISvgProps) {
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
        d="m21.808 6.192-4-4A.65.65 0 0 0 17.333 2H16v5.333c0 .738-.596 1.334-1.333 1.334H9.333A1.332 1.332 0 0 1 8 7.334V2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1.333v-6a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2v6H20a2 2 0 0 0 2-2V6.667a.675.675 0 0 0-.192-.475Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        d="M9 2h5.333v5.334H9V2ZM17 15.334H7.667c-.367 0-.667.3-.667.666v6h10.667v-6c0-.366-.3-.666-.667-.666Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgCopyFilledIcon;
