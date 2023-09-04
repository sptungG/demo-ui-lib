import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgScaleActiveIcon(props: ISvgProps) {
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
      width={props.style?.width || sizeCheck(props.style?.fontSize)}
      height={props.style?.height || sizeCheck(props.style?.fontSize)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fontSize={sizeCheck(props.style?.fontSize)}
      {...props}
    >
      <g clipPath="url(#scale-active-icon_svg__a)">
        <path
          d="M18.417 14.424v-3.795c3.353-1.326 5.637-4.421 6.153-5.195.037-.073 0-.184-.074-.184H6.112c-.074 0-.147.11-.074.184 2.137 2.763 4.2 4.384 6.116 5.158v3.832H8.986a.71.71 0 0 0-.7.552L6.076 25.33c-.111.516.257.921.7.921h17.02c.442 0 .81-.405.7-.884l-2.21-10.39a.71.71 0 0 0-.7-.552h-3.169Zm-6.89 9.21a.646.646 0 0 1-.625-.626v-5.305c0-.332.294-.627.626-.627.331 0 .626.295.626.627v5.305a.646.646 0 0 1-.626.626Zm2.506-1.326a.646.646 0 0 1-.626-.626v-3.98c0-.33.294-.626.626-.626s.626.295.626.627v4.015c0 .332-.294.59-.626.59Zm.626-11.09c.442.037.848.037 1.253 0v3.206h-1.253v-3.206Zm1.88 11.09a.646.646 0 0 1-.627-.626v-3.98c0-.33.295-.626.626-.626.332 0 .627.295.627.627v4.015c0 .332-.295.59-.627.59Zm2.505 1.326a.646.646 0 0 1-.627-.626v-5.305c0-.332.295-.627.627-.627.331 0 .626.295.626.627v5.305a.646.646 0 0 1-.626.626Z"
          fill="#08f"
        />
      </g>
      <defs>
        <clipPath id="scale-active-icon_svg__a">
          <path fill="#fff" transform="translate(6 5.25)" d="M0 0h18.568v21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgScaleActiveIcon;
