import * as React from "react";
import { SVGProps } from "react";
import ISvgProps from "../types";
function SvgLoadingSkipIcon(props: ISvgProps) {
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
      <g clipPath="url(#loading-skip-icon_svg__a)">
        <path d="M5.945 19.262a2.133 2.133 0 1 0 0-4.266 2.133 2.133 0 0 0 0 4.266Z" fill="#BFC3C7" />
        <path d="M19.664 17.371a1.852 1.852 0 1 0 0-3.703 1.852 1.852 0 0 0 0 3.703Z" fill="#EFF2F5" />
        <path d="M17.977 8.035a1.527 1.527 0 1 0 0-3.055 1.527 1.527 0 0 0 0 3.055Z" fill="#E9EDF1" />
        <path
          d="M4.262 14.055c1.249 0 2.261-.988 2.261-2.207 0-1.22-1.012-2.207-2.261-2.207-1.25 0-2.262.988-2.262 2.207 0 1.219 1.013 2.207 2.262 2.207Z"
          fill="#B5B9BF"
        />
        <path
          d="M10.765 22c1.137 0 2.06-.897 2.06-2.004s-.923-2.004-2.06-2.004c-1.136 0-2.058.897-2.058 2.004S9.629 22 10.765 22Z"
          fill="#C8CBCF"
        />
        <path
          d="M16.055 21.121c1.079 0 1.953-.852 1.953-1.902 0-1.05-.874-1.903-1.953-1.903-1.079 0-1.953.852-1.953 1.903 0 1.05.874 1.902 1.953 1.902Z"
          fill="#B9C3CD"
          fillOpacity={0.5}
        />
        <path
          opacity={0.9}
          d="M6.71 8.93c1.308 0 2.368-1.034 2.368-2.309 0-1.275-1.06-2.309-2.367-2.309s-2.367 1.034-2.367 2.31c0 1.274 1.06 2.308 2.367 2.308Z"
          fill="#ADB1B7"
        />
        <path
          d="M20.25 12.426c.967 0 1.75-.768 1.75-1.715 0-.947-.783-1.715-1.75-1.715-.966 0-1.75.768-1.75 1.715 0 .947.784 1.715 1.75 1.715Z"
          fill="#EDEEEF"
        />
        <path
          d="M12.496 6.992a2.496 2.496 0 1 0 0-4.992 2.496 2.496 0 0 0 0 4.992Z"
          fill={colorCheck(props.color) || `currentColor`}
        />
      </g>
      <defs>
        <clipPath id="loading-skip-icon_svg__a">
          <path fill="#fff" transform="translate(2 2)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SvgLoadingSkipIcon;
