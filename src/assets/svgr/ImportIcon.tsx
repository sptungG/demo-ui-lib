import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";

function SvgImportIcon(props: ISvgProps) {
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
      <g clipPath="url(#import-icon_svg__a)">
        <path
          d="M22 11.275v6.546a2.646 2.646 0 0 1-2.727 2.544H4.727A2.646 2.646 0 0 1 2 17.82v-6.546a.909.909 0 0 1 1.815 0v6.546c.06.447.46.767.908.728h14.545a.843.843 0 0 0 .908-.728v-6.546c0-.503.41-.908.908-.908a.905.905 0 0 1 .916.908Zm-12.188.153a.91.91 0 0 0-1.292 0 .91.91 0 0 0 0 1.291L11.36 15.6h.046c.137.12.312.196.49.218h.175a.903.903 0 0 0 .584-.265l2.838-2.838a.913.913 0 0 0 0-1.287l-.004-.004a.913.913 0 0 0-1.287.004L12.91 12.72V4.908A.911.911 0 0 0 12.002 4a.911.911 0 0 0-.908.908v7.811l-1.282-1.29Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="import-icon_svg__a">
          <path fill="#fff" transform="translate(2 4)" d="M0 0h20v16.365H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgImportIcon;
