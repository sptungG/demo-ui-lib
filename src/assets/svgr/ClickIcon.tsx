import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgClickIcon(props: ISvgProps) {
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
        d="M20.25 4.493a.75.75 0 0 1-.53-1.273L21.97.97a.75.75 0 0 1 1.06 1.06l-2.25 2.25a.748.748 0 0 1-.53.213ZM22.447 8.25H21a.75.75 0 1 1 0-1.5h1.447a.75.75 0 0 1 0 1.5ZM16.5 3.75a.75.75 0 0 1-.75-.75V1.553a.75.75 0 1 1 1.5 0V3a.75.75 0 0 1-.75.75ZM22.5 14.245a.748.748 0 0 1-.53-.215l-2.25-2.25a.75.75 0 0 1 1.06-1.06l2.25 2.25a.753.753 0 0 1-.53 1.275ZM12.75 4.496a.746.746 0 0 1-.53-.216L9.97 2.03A.75.75 0 0 1 11.03.97l2.25 2.25a.753.753 0 0 1-.53 1.276ZM17.525 6.476a1.6 1.6 0 0 0-1.72-.368L1.79 11.447a1.617 1.617 0 0 0 .111 3.06l5.78 1.734a.115.115 0 0 1 .078.078l1.734 5.78a1.597 1.597 0 0 0 1.49 1.15 1.625 1.625 0 0 0 1.57-1.04l5.338-14.014a1.597 1.597 0 0 0-.367-1.72Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgClickIcon;
