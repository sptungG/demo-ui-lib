import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgIndustrialScaleIcon(props: ISvgProps) {
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
        d="M4.914 15.23a.909.909 0 0 1 .813-.503h12.727a.91.91 0 0 1 .814.503l1.818 3.636a.909.909 0 0 1-.813 1.316H3.909a.91.91 0 0 1-.813-1.316l1.818-3.636Zm1.375 1.316-.909 1.818h13.422l-.91-1.819H6.29Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.454 18.364a.91.91 0 0 1 .91.909v1.818a.91.91 0 1 1-1.819 0v-1.818a.91.91 0 0 1 .91-.91ZM12.09 5.636a.91.91 0 0 1 .91.91v9.09a.909.909 0 0 1-1.818 0v-9.09a.91.91 0 0 1 .909-.91Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.91A.91.91 0 0 1 8.91 2h6.363a.91.91 0 0 1 .909.91v3.635a.91.91 0 0 1-.91.91H8.91A.91.91 0 0 1 8 6.545V2.91Zm1.818.908v1.818h4.546V3.818H9.818ZM15.727 18.364a.91.91 0 0 1 .91.909v1.818a.91.91 0 1 1-1.819 0v-1.818a.91.91 0 0 1 .91-.91Z"
        fill={colorCheck(props.color) || `currentColor`}
      />
    </svg>
  );
}

export default SvgIndustrialScaleIcon;
